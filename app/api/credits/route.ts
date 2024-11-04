export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { r2Client, R2_OBJECT_BUCKET_NAME } from "@/lib/r2";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const DEFAULT_CREDITS = 5;

export async function GET(request: NextRequest) {
  let userIp;
  try {
    // 尝试从 URL 参数中获取 userIp
    const { searchParams } = new URL(request.url);
    userIp = searchParams.get("userIp");
    const userKey = `credits_${userIp}`;

    try {
      const command = new GetObjectCommand({
        Bucket: R2_OBJECT_BUCKET_NAME,
        Key: userKey,
      });
      const response = await r2Client.send(command);
      const credits = parseInt(await response.Body!.transformToString());
      return NextResponse.json({ credits });
    } catch (error: any) {
      if (error.name === "NoSuchKey") {
        // 如果键不存在，创建一个新的记录并返回默认 credits
        const putCommand = new PutObjectCommand({
          Bucket: R2_OBJECT_BUCKET_NAME,
          Key: userKey,
          Body: DEFAULT_CREDITS.toString(),
        });
        await r2Client.send(putCommand);
        return NextResponse.json({ credits: DEFAULT_CREDITS });
      } else {
        // 如果是其他错误，重新抛出
        throw error;
      }
    }
  } catch (error) {
    console.error("Error fetching credits:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { userIp } = await request.json();
  const userKey = `credits_${userIp}`;
  try {
    const command = new GetObjectCommand({
      Bucket: R2_OBJECT_BUCKET_NAME,
      Key: userKey,
    });
    const response = await r2Client.send(command);
    let credits = response.Body
      ? parseInt(await response.Body.transformToString())
      : DEFAULT_CREDITS;

    if (credits > 0) {
      credits--;
      const putCommand = new PutObjectCommand({
        Bucket: R2_OBJECT_BUCKET_NAME,
        Key: userKey,
        Body: credits.toString(),
      });
      await r2Client.send(putCommand);
      return NextResponse.json({
        message: "Credit used successfully",
        credits,
      });
    } else {
      return NextResponse.json({ message: "No credits left" }, { status: 403 });
    }
  } catch (error) {
    console.error("Error updating credits:", error);
    return NextResponse.json(
      { message: "Error updating credits" },
      { status: 500 }
    );
  }
}


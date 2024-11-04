export const runtime = "edge";

import { runModel } from "@/lib/replicate";
// import { runModel } from "@/lib/huggingface";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt, image, mask, sceneContext } = await request.json();
    const result = await runModel(prompt, image, mask, sceneContext);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error running model:", error);
    return NextResponse.json({ error: "Error running model" }, { status: 500 });
  }
}


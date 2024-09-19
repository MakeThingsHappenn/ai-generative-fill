import { runModel } from "@/lib/replicate";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt, image, mask } = await request.json();
    const result = await runModel(prompt, image, mask);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error running model:", error);
    return NextResponse.json({ error: "Error running model" }, { status: 500 });
  }
}


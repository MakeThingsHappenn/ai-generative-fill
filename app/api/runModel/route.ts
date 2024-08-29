import { runModel } from "@/lib/replicate";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const result = await runModel();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error running model:", error);
    return NextResponse.json({ error: "Error running model" }, { status: 500 });
  }
}

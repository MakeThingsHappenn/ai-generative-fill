import OpenAI from "openai";
import fetch from "node-fetch";
import { ProxyAgent } from "proxy-agent";

const agent = process.env.VERCEL
  ? undefined
  : process.env.HTTPS_PROXY
  ? new ProxyAgent(process.env.HTTPS_PROXY as any)
  : undefined;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  fetch: ((url: string, options: any) => {
    return fetch(url, { ...options, agent });
  }) as any,
});

const openaiPrompt = `You are an expert Stable Diffusion inpainting prompt engineer. Your task is to create detailed prompts that help generate images fitting perfectly into existing scenes.

Given the scene description and user's request, create a prompt that:
1. Focuses on the specific object/area to be generated
2. Matches the scene's lighting, perspective, and atmosphere
3. Ensures seamless integration with surroundings
4. Includes technical quality terms

Format output as:
PROMPT: [main prompt]
NEG: [negative prompt]`;

export async function optimizePrompt(
  userPrompt: string,
  sceneContext: string
): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key is not configured");
      return userPrompt;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: openaiPrompt,
        },
        {
          role: "user",
          content: `Scene context: ${sceneContext}\nUser request: ${userPrompt}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });
    if (!response.choices[0]?.message?.content) {
      console.error("No content in OpenAI response:", response);
      return userPrompt;
    }
    return response.choices[0].message.content || userPrompt;
  } catch (error) {
    // 更详细的错误日志
    if (error instanceof Error) {
      console.error("OpenAI API Error:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error("Unknown error type:", error);
    }
    return userPrompt;
  }
}


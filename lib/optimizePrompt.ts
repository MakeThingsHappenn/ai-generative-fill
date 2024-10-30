import OpenAI from "openai";
import fetch from "node-fetch";
import { ProxyAgent } from "proxy-agent";

const agent = process.env.HTTPS_PROXY
  ? new ProxyAgent(process.env.HTTPS_PROXY)
  : undefined;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  fetch: (url: string, options: any) => {
    return fetch(url, { ...options, agent });
  },
});

export async function optimizePrompt(userPrompt: string): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key is not configured");
      return userPrompt;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a Stable Diffusion inpainting prompt expert. Your task is to optimize user prompts for filling masked/selected areas in images. Follow these principles:\n\n" +
            "1. Focus on describing WHAT should appear in the masked area, not the entire image\n" +
            "2. Include specific details about textures, materials, and surface qualities\n" +
            "3. Describe how the new content should connect with edges of the masked area\n" +
            "4. Consider lighting, shadows, and perspective to match the surrounding image\n" +
            "5. Use Stable Diffusion's preferred prompt style: clear, detailed noun phrases with key artistic terms\n\n" +
            "Transform the user's input into a clear, detailed prompt. Return only the optimized prompt without explanation.",
        },
        {
          role: "user",
          content: userPrompt,
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


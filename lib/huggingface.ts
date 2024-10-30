import { Client } from "@gradio/client";

export const runModel = async (prompt: string, image: string, mask: string) => {
  try {
    // const input = {
    //   prompt,
    //   mask,
    //   image,
    //   num_outputs: 1,
    //   num_inference_steps: 50,
    //   guidance_scale: 7.5,
    //   seed: 0,
    // };
    console.log("token", process.env.HUGGING_FACE_API_TOKEN);
    const client = await Client.connect(
      // "ameerazam08/FLUX.1-dev-Inpainting-Model-Beta-GPU"
      "https://ameerazam08-flux-1-dev-inpainting-model-beta-gpu.hf.space",
      {
        hf_token: process.env.HUGGING_FACE_API_TOKEN as `hf_${string}`,
      }
    );
    const result = await client.predict("/process", {
      input_image_editor: {
        background: {
          name: "background.png",
          data: image,
          path: image,
          is_file: true,
        },
        layers: [
          {
            name: "mask.png",
            data: mask,
            path: mask,
            is_file: true,
          },
        ],
      },
      prompt: prompt,
      negative_prompt: "",
      controlnet_conditioning_scale: 0.9,
      guidance_scale: 3.5,
      seed: 124,
      num_inference_steps: 24,
      true_guidance_scale: 3.5,
    });

    // 处理返回的数据
    if (Array.isArray(result.data) && result.data.length > 0) {
      return result.data[0].url;
    }
    throw new Error("No valid result returned from the model");

    // 如果不是数组，则直接返回输出
  } catch (error) {
    console.error("Error running model:", error);
    throw error;
  }
};


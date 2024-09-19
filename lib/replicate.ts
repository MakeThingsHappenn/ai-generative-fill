import Replicate from "replicate";

// 从环境变量中获取API密钥
const apiKey = process.env.REPLICATE_API_KEY;
const replicate = new Replicate({ auth: apiKey });

const input = {
  mask: "https://replicate.delivery/pbxt/HtGQBqO9MtVbPm0G0K43nsvvjBB0E0PaWOhuNRrRBBT4ttbf/mask.png",
  image: "/public/home1/woman.png",
  prompt: "sea",
  num_inference_steps: 25,
};

// ... existing code ...

export const runModel = async (prompt: string, image: string, mask: string) => {
  try {
    const params = {
      prompt,
      mask,
      image,
      num_inference_steps: 25,
    };
    // const output = await replicate.run(
    //   "stability-ai/stable-diffusion-inpainting:95b7223104132402a9ae91cc677285bc5eb997834bd2349fa486f53910fd68b3",
    //   { input }
    // );

    const output = await replicate.run(
      "andreasjansson/stable-diffusion-inpainting:e490d072a34a94a11e9711ed5a6ba621c3fab884eda1665d9d3a282d65a21180",
      { input }
    );

    // 检查输出是否为数组，如果是，则返回第一个元素
    if (Array.isArray(output) && output.length > 0) {
      return output[0];
    }

    // 如果不是数组，则直接返回输出
    return output;
  } catch (error) {
    console.error("Error running model:", error);
    throw error;
  }
};


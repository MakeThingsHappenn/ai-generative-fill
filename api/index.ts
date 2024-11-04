export const runtime = "edge";

import { request } from "@/lib/request";

export const generateImage = (params: any) => {
  return request.post("/runModel", params);
};

export const uploadImage = async (
  file: File,
  additionalData: Record<string, any> = {}
) => {
  const formData = new FormData();
  formData.append("file", file);

  // 添加额外的数据到 FormData
  Object.entries(additionalData).forEach(([key, value]) => {
    formData.append(key, String(value));
  });

  return request.post("/uploadImage", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getCredits = (params: any) => {
  return request.get("/credits", params);
};

export const minusCredits = (params: any) => {
  return request.post("/credits", params);
};


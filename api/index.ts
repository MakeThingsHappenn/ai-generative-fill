import { request } from "@/lib/request";

export const generateImage = (params: any) => {
  return request.post("/runModel", params);
};


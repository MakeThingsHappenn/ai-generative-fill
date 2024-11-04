export const runtime = "edge";
import { request } from "@/lib/request";
export const generateImage = (params) => {
    return request.post("/runModel", params);
};
export const uploadImage = async (file, additionalData = {}) => {
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
export const getCredits = (params) => {
    return request.get("/credits", params);
};
export const minusCredits = (params) => {
    return request.post("/credits", params);
};
//# sourceMappingURL=index.js.map
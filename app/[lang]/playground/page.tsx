"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaUndo,
  FaPaintBrush,
  FaEraser,
  FaUpload,
  FaDownload,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import ImageEditor from "../../../components/playground/imageEditor";
import { generateImage, uploadImage } from "@/api";
import { useSearchParams } from "next/navigation";
import { creditsStore } from "@/store/credits";
import { observer } from "mobx-react-lite";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Playground = () => {
  const searchParams = useSearchParams();
  const [prompt, setPrompt] = useState("");
  const [sceneContext, setSceneContext] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const [brushSize, setBrushSize] = useState(30);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawHistory, setDrawHistory] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [generateBtnText, setGenerateBtnText] = useState("Generate");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [alert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [lastPoint, setLastPoint] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const imageParam = searchParams.get("image");
    if (imageParam) {
      const decodedImageUrl = decodeURIComponent(imageParam);
      setUploadedImage(decodedImageUrl);
    }
  }, [searchParams]);

  const handleSetCanvas = useCallback(() => {
    if (imageContainerRef.current && uploadedImage) {
      const img = document.createElement("img");
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const containerWidth = imageContainerRef.current!.offsetWidth;
        setContainerWidth(containerWidth);
        const aspectRatio = img.height / img.width;
        const newHeight = containerWidth * aspectRatio;
        setImageHeight(newHeight);

        // 设置canvas大小并绘制图片
        if (canvasRef.current && maskCanvasRef.current) {
          const canvas = canvasRef.current;
          const maskCanvas = maskCanvasRef.current;
          const ctx = canvas.getContext("2d");
          const maskCtx = maskCanvas.getContext("2d");
          canvas.width = maskCanvas.width = containerWidth;
          canvas.height = maskCanvas.height = newHeight;
          ctx?.drawImage(img, 0, 0, containerWidth, newHeight);
          maskCtx?.fillRect(0, 0, containerWidth, newHeight);

          // 保存初始状态
          setDrawHistory([
            {
              main: ctx?.getImageData(0, 0, canvas.width, canvas.height),
              mask: maskCtx?.getImageData(
                0,
                0,
                maskCanvas.width,
                maskCanvas.height
              ),
            },
          ]);
        }
      };
      img.src = uploadedImage;
    }
  }, [uploadedImage]);

  useEffect(() => {
    if (uploadedImage) {
      handleSetCanvas();
    }
  }, [uploadedImage, handleSetCanvas]);

  const runModel = async (
    prompt: string,
    uploadedImage: string | null,
    maskImage: string
  ) => {
    const params = {
      prompt,
      image: uploadedImage,
      mask: maskImage,
      sceneContext,
    };
    setGenerateBtnText("Generating...");
    setLoading(true);
    setLoadingText("Working magic on your prompt and generating image...");
    generateImage(params).then((res: any) => {
      setGenerateBtnText("Generate");
      setLoading(false);
      setGeneratedImage(res.data);
      creditsStore.updateCredits();
    });
  };

  const handleGenerate = async () => {
    const credits = creditsStore.credits;
    if (credits === null || credits <= 0) {
      setShowAlert(true);
      setAlertMessage("No credits left, please sign up for more credits.");
      return;
    }
    if (!canvasRef.current || !maskCanvasRef.current) {
      setShowAlert(true);
      setAlertMessage("Please upload an image first.");
      return;
    }

    // Generate mask
    const maskCanvas = maskCanvasRef.current;
    const maskCtx = maskCanvas.getContext("2d");
    const imageData = maskCtx?.getImageData(
      0,
      0,
      maskCanvas.width,
      maskCanvas.height
    );
    if (imageData) {
      for (let i = 0; i < imageData.data.length; i += 4) {
        // Check if the pixel is the brush color (255, 200, 100)
        if (
          imageData.data[i] === 255 &&
          imageData.data[i + 1] === 255 &&
          imageData.data[i + 2] === 255
        ) {
          imageData.data[i] =
            imageData.data[i + 1] =
            imageData.data[i + 2] =
              255; // White
        } else {
          imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = 0; // Black
        }
        // 设置完全不透明
        imageData.data[i + 3] = 255; // Alpha
      }
      maskCtx?.putImageData(imageData, 0, 0);
    }

    const maskImage = maskCanvas.toDataURL("image/png");

    // 将 Data URL 转换为 Blob
    const res = await fetch(maskImage);
    const blob = await res.blob();

    // 创建 File 对象
    const file = new File([blob], "mask.png", { type: "image/png" });
    setLoading(true);
    setLoadingText("Mask Generating...");
    const response = await uploadImage(file);
    setLoading(false);
    const maskImageUrl = response.data.url;
    runModel(prompt, uploadedImage, maskImageUrl);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      setLoadingText("Image Uploading...");
      const response = await uploadImage(file);
      setLoading(false);
      if (response.data.url) {
        setUploadedImage(response.data.url);
        setGeneratedImage(""); // 新上传图片时，清除原有生成图片
      }
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setLastPoint(null);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setLastPoint(null);
  };

  const handleReset = () => {
    if (drawHistory.length > 0) {
      const canvas = canvasRef.current;
      const maskCanvas = maskCanvasRef.current;
      const ctx = canvas?.getContext("2d");
      const maskCtx = maskCanvas?.getContext("2d");
      if (canvas && ctx && maskCanvas && maskCtx) {
        const initialState = drawHistory[0];
        ctx.putImageData(initialState.main, 0, 0);
        maskCtx.putImageData(initialState.mask, 0, 0);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current || !maskCanvasRef.current) return;
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const ctx = canvas.getContext("2d");
    const maskCtx = maskCanvas.getContext("2d");
    if (ctx && maskCtx) {
      const rect = canvas.getBoundingClientRect();

      const currentPoint = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      // 绘制单个点
      const drawPoint = (x: number, y: number) => {
        // 在主画布上显示预览
        ctx.fillStyle = "rgba(255, 200, 100, 0.5)";
        ctx.beginPath();
        ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
        ctx.fill();

        // 在 mask 画布上绘制纯白色
        maskCtx.fillStyle = "rgb(255, 255, 255)";
        maskCtx.beginPath();
        maskCtx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
        maskCtx.fill();
      };

      // 在两点之间插值
      if (lastPoint) {
        const dx = currentPoint.x - lastPoint.x;
        const dy = currentPoint.y - lastPoint.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const stepSize = brushSize / 4;
        const numSteps = Math.max(1, Math.floor(distance / stepSize));

        for (let i = 0; i <= numSteps; i++) {
          const t = i / numSteps;
          const x = lastPoint.x + dx * t;
          const y = lastPoint.y + dy * t;
          drawPoint(x, y);
        }
      } else {
        drawPoint(currentPoint.x, currentPoint.y);
      }

      setLastPoint(currentPoint);
      // const x = e.clientX - rect.left;
      // const y = e.clientY - rect.top;

      // // 为两个画布设置相同的绘制属性
      // [ctx, maskCtx].forEach((context) => {
      //   context.fillStyle =
      //     context === ctx ? "rgba(255, 200, 100, 0.5)" : "rgb(255, 200, 100)";
      //   context.beginPath();
      //   context.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      //   context.fill();
      // });
    }
  };

  const handleDownload = async () => {
    if (generatedImage) {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "generated-image.png";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  // 添加继续生成的处理函数
  const handleContinueGenerate = () => {
    if (generatedImage) {
      setUploadedImage(generatedImage);
      setGeneratedImage(null); // 清空生成图片区域
      handleReset();
    }
  };

  return (
    <div
      style={{ height: imageHeight ? `${imageHeight + 100}px` : "600px" }}
      className="bg-homeBackground"
    >
      <div className="flex h-screen bg-homeBackground">
        {/* 左侧边栏 */}
        <div className="w-64 p-4">
          {/* 场景描述输入框 */}
          <div className="mb-4">
            <label className="text-white text-sm mb-2 block">
              Image Description
            </label>
            <textarea
              className="w-full h-24 p-2 rounded bg-transparent placeholder:text-sm placeholder-gray-300 border border-white text-white focus:outline-none focus:ring-0 focus:border-white"
              placeholder="Brief describe this image (e.g., 'A bench at sunset, someone sitting with a bag')"
              value={sceneContext}
              onChange={(e) => setSceneContext(e.target.value)}
            />
          </div>
          {/* 生成需求输入框 */}
          <div className="mb-4">
            <label className="text-white text-sm mb-2 block">
              What to Generate
            </label>
            <textarea
              className="w-full h-24 p-2 rounded bg-transparent placeholder:text-sm placeholder-gray-300 border border-white text-white focus:outline-none focus:ring-0 focus:border-white"
              placeholder="What would you like to add or replace in the selected area?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <button
            className="w-full py-2 mb-4 bg-blue-500 text-white rounded"
            onClick={handleGenerate}
            disabled={loading}
          >
            {generateBtnText}
          </button>
          <label className="flex items-center justify-center w-full py-2 bg-gray-200 text-gray-700 rounded cursor-pointer mb-4">
            <FaUpload className="mr-2" />
            Upload File
            <input type="file" className="hidden" onChange={handleFileUpload} />
          </label>
          <button
            className="flex items-center justify-center w-full py-2 bg-gray-200 text-gray-700 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleContinueGenerate}
            disabled={!generatedImage}
          >
            Continue Generate
          </button>
        </div>

        {/* 主区域 */}
        <div className="flex-1 flex">
          {/* 左侧图像（原图） */}
          <div className="flex-1 p-4">
            <div
              ref={imageContainerRef}
              className="border border-white overflow-hidden rounded-lg border-dashed"
              style={{
                height: imageHeight ? `${imageHeight}px` : "560px",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                {uploadedImage ? (
                  <>
                    <canvas
                      ref={canvasRef}
                      onMouseDown={startDrawing}
                      onMouseUp={stopDrawing}
                      onMouseOut={stopDrawing}
                      onMouseMove={draw}
                      className="w-full h-full"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white">Uploaded Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* 右侧图像（生成图） */}
          <div className="flex-1 p-4">
            <div
              ref={imageContainerRef}
              className="border border-white overflow-hidden rounded-lg border-dashed"
              style={{
                height: imageHeight ? `${imageHeight}px` : "560px",
              }}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                {generatedImage ? (
                  <>
                    <button
                      onClick={handleDownload}
                      className="absolute top-2 right-2 z-10 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
                    >
                      <FaDownload className="text-gray-700" />
                    </button>
                    <Image
                      src={generatedImage}
                      height={imageHeight}
                      width={containerWidth}
                      alt="Generated"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white">Generated Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 底部工具栏 */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex justify-center space-x-6 min-w-96">
          <button className="text-lg" onClick={handleReset}>
            <FaUndo />
          </button>
          <button className="text-lg">
            <FaPaintBrush />
          </button>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">{brushSize}</span>
          </div>
        </div>
      </div>
      {/* <a className="btn btn-primary" onClick={handleModelExecution}>
        Run Model
      </a>
      <ImageEditor /> */}
      <canvas ref={maskCanvasRef} style={{ display: "none" }} />

      {loading && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-50">
          <div className="flex flex-col items-center">
            <span className="loading loading-dots loading-lg text-white"></span>
            <div className="text-white">{loadingText}</div>
          </div>
        </div>
      )}
      {alert && (
        <div className="toast">
          <div className="alert alert-info bg-yellow-400">
            <span>{alertMessage}</span>
            <IoIosCloseCircleOutline
              onClick={() => setShowAlert(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(Playground);


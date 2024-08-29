import React, { useRef, useState, useEffect } from "react";

const ImageEditor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [maskImage, setMaskImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (originalImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
      };
      img.src = originalImage;
    }
  }, [originalImage]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setOriginalImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.strokeStyle = "white";
      ctx.lineWidth = 20;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const generateMask = () => {
    if (canvasRef.current && maskCanvasRef.current) {
      const canvas = canvasRef.current;
      const maskCanvas = maskCanvasRef.current;
      const ctx = canvas.getContext("2d");
      const maskCtx = maskCanvas.getContext("2d");

      if (ctx && maskCtx) {
        // Set mask canvas size to match original image
        maskCanvas.width = canvas.width;
        maskCanvas.height = canvas.height;

        // Get image data from the main canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Create a new ImageData for the mask
        const maskImageData = new ImageData(canvas.width, canvas.height);
        const maskData = maskImageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Check if the pixel is white (part of the drawn area)
          if (r === 255 && g === 255 && b === 255) {
            // White areas in the original become white in the mask
            maskData[i] = maskData[i + 1] = maskData[i + 2] = 255;
            maskData[i + 3] = 255;
          } else {
            // Other areas become black
            maskData[i] = maskData[i + 1] = maskData[i + 2] = 0;
            maskData[i + 3] = 255;
          }
        }

        // Put the mask image data onto the mask canvas
        maskCtx.putImageData(maskImageData, 0, 0);

        // Set the mask image state
        setMaskImage(maskCanvas.toDataURL());
        console.log(maskCanvas.toDataURL());
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {originalImage && (
        <div>
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
            style={{
              border: "1px solid black",
            }}
          />
          <button onClick={generateMask}>Generate Mask</button>
        </div>
      )}
      {maskImage && (
        <div>
          <h3>Generated Mask:</h3>
          <img src={maskImage} alt="Generated Mask" />
        </div>
      )}
      <canvas ref={maskCanvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default ImageEditor;


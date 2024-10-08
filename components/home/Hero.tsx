"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import CaseImage from "@/components/common/caseImage";
import { uploadImage } from "@/api";

const Hero = ({
  locale,
  CTALocale,
  lang,
}: {
  locale: any;
  CTALocale: any;
  lang: string;
}) => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      if (file.type.startsWith("image/")) {
        setIsUploading(true);
        try {
          const res = await uploadImage(file);
          const uploadedImageUrl = res.data.url;

          // Encode the image URL to safely pass it as a query parameter
          const encodedImageUrl = encodeURIComponent(uploadedImageUrl);

          // Navigate to the playground page with the uploaded image URL
          router.push(`/${lang}/playground?image=${encodedImageUrl}`);
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("Failed to upload image. Please try again.");
        } finally {
          setIsUploading(false);
        }
      } else {
        alert("Please select an image file.");
      }
    },
    [router, lang]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <>
      <section className="bg-homeBackground w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 lg:py-20">
          <div className="w-[101%] flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start order-2 sm:order-1">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {locale.title}
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              {locale.description}
            </p>
            <div className="w-full">
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
              <div
                className={`group relative flex h-full w-full cursor-pointer items-center rounded-2xl font-medium focus-within:outline-none ${
                  isDragging ? "bg-green-200" : "hover:bg-green-200"
                }`}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onClick={onClick}
              >
                <div className="text- flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-black px-6 py-8 text-center font-semibold hover:bg-blend-multiply sm:py-16">
                  <p className="hidden text-xl font-normal sm:block">
                    Click or drop your image here
                  </p>
                  <p className="sm:hidden">Tap here to load your picture</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-full order-1 sm:order-2">
            <CaseImage
              beforeImg="/home/girl-before.webp"
              afterImg="/home/girl-after.webp"
              width={500}
              height={500}
              direction="horizon"
            />
          </div>
        </div>
      </section>
      <Image
        src="/common/wave-bottom.svg"
        alt="Wave Bottom"
        width={1440}
        height={260}
        className="w-full -mt-10"
      />
    </>
  );
};

export default Hero;


import Image from "next/image";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

import React from "react";

interface caseImageProps {
  beforeImg: string;
  afterImg: string;
  width: number;
  height: number;
  direction: "horizon" | "vertical";
}

const caseImage = ({
  beforeImg,
  afterImg,
  width,
  height,
  direction,
}: caseImageProps) => {
  const isHorizontal = direction === "horizon";
  return (
    <div
      className={`lg:w-full order-1 sm:order-2 ${
        isHorizontal ? "" : "flex flex-col"
      }`}
    >
      <div className={`card ${isHorizontal ? "lg:card-side" : ""}`}>
        <figure className="relative">
          <Image
            src={beforeImg}
            alt="Before"
            width={width}
            height={height}
            className={isHorizontal ? "rounded-l-lg" : "rounded-t-lg"}
          />
        </figure>
        <div
          className={`card-body p-2 flex items-center justify-center ${
            isHorizontal ? "w-16" : "h-16"
          }`}
        >
          {isHorizontal ? (
            <FaArrowRight className="text-4xl text-primary" />
          ) : (
            <FaArrowDown className="text-4xl text-primary" />
          )}
        </div>
        <figure className="relative">
          <Image
            src={afterImg}
            alt="After"
            width={width}
            height={height}
            className={isHorizontal ? "rounded-r-lg" : "rounded-b-lg"}
          />
        </figure>
      </div>
    </div>
    // <div className="lg:w-full order-1 sm:order-2">
    //   <div className="card lg:card-side shadow-xl">
    //     <figure className="relative">
    //       <Image
    //         src={beforeImg}
    //         alt="Before"
    //         width={width}
    //         height={height}
    //         className="rounded-l-lg"
    //       />
    //     </figure>
    //     <div className="card-body p-2 flex items-center justify-center">
    //       <FaArrowRight className="text-4xl text-primary" />
    //     </div>
    //     <figure className="relative">
    //       <Image
    //         src={afterImg}
    //         alt="After"
    //         width={width}
    //         height={height}
    //         className="rounded-r-lg"
    //       />
    //     </figure>
    //   </div>
    // </div>
  );
};

export default caseImage;


"use client";
import React from "react";
import ImageEditor from "../../../components/playground/imageEditor";

const handleModelExecution = async () => {
  try {
    const response = await fetch("/api/runModel", { method: "POST" });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const Playground = () => {
  return (
    <div>
      <a className="btn btn-primary" onClick={handleModelExecution}>
        Run Model
      </a>
      <ImageEditor />
    </div>
  );
};

export default Playground;


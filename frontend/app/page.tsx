"use client";

// Import necessary modules
import { useState } from "react";
import { Divider, Spacer } from "@nextui-org/react";
import { SketchfabModel } from "../components/SketchfabModel";
import { AnswerCard } from "@/components/answer-card";
import DragDrop from "@/components/drap-drop";
import axios from "axios"; // Add this import

const responseData = {
  // image: "https://example.com/image.jpg",
  // description: "This is the description of the answer.",
};

export default function Home() {
  const [predictionData, setPredictionData] = useState(responseData);

  const handlePrediction = (data: any) => {
    // Check if the image URL is present in the response data
    if (data.image) {
      // If the image is present, set the image URL directly
      data.image = URL.createObjectURL(data.image);
    }
    setPredictionData(data);
  };

  return (
    <section>
    <div className=" grid grid-flow-row justify-items-left max-w-2xl  p-20  ">
      <div className=" grid grid-flow-col p-15 pt-20 ">
          <AnswerCard responseData={predictionData} />
      </div>

      <div className="flex justify-center">
        <div className="p-10 pr-50">
          <DragDrop onPrediction={handlePrediction} />
        </div>
      </div>
      
    </div>
    
    </section>
    
  );
}

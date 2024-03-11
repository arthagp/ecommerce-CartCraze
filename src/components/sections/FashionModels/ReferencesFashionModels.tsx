import HeadlineSection from "@/components/common/HeadlineSection";
import React from "react";
import { models } from "@/lib/data/dataModels";
import Image from "next/image";

const ReferencesFashionModels = () => {
  const title = "Fashion Models Reference";
  const description = `Let's Check This out, for our fashion modern models reference`;

  return (
    <div className="container-section">
      <HeadlineSection title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5">
        {models.map((model, index) => (
          <div key={index} className="w-52 h-[400px] relative">
            <Image
              className="w-full h-[90%] object-cover absolute inset-0"
              src={model.src}
              alt={model.category}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="bg-white absolute md:bottom-0 md:left-0 bottom-1 left-1 md:w-full">
              <h4 className="text-center py-2 px-2 font-medium opacity-70">
                {model.category}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferencesFashionModels;

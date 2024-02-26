import React from "react";

type HeadlineSectionProps = {
  title: string;
  description: string;
};

const HeadlineSection = ({ title, description }: HeadlineSectionProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 mb-10">
      <h1 className="font-semibold text-2xl md:text-3xl text-center">
        {title}
      </h1>
      <p className="text-center desc max-w-72 mx-auto">{description}</p>
    </div>
  );
};

export default HeadlineSection;

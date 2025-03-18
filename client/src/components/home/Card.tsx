import React from "react";

const Card = ({
  icon,
  heading,
  description,
}: {
  icon: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className="p-5 bg-[#f1f4ff] rounded-2xl">
      <div className="flex justify-between">
        <h2 className="font-medium my-auto text-[18px]">{heading}</h2>
        <img src={icon} alt="" />
      </div>
      <div className="text-justify text-sm  mt-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);

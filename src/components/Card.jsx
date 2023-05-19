import React from "react";
import Dialog from "./Dialog";

const Card = ({ item }) => {
  const { short_description, title, thumb, slug } = item;
  return (
    <div className="rounded-2xl bg-p-davys-grey-100 overflow-hidden h-96 flex flex-col pb-5 items-center justify-start gap-6 border-[1px] border-solid border-gainsboro shadow-custom">
      <div className="w-full">
        <img
          className="relative rounded-t-2xl rounded-b-none w-full h-[10.75rem] object-cover"
          alt="thumbnail"
          src={thumb}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[1rem] overflow-hidden text-ellipsis  p-5">
        <div>
          <Dialog title={title} slug={slug} />
        </div>
        <div className="relative text-[1rem] h-18 leading-[1.5rem] font-medium text-darkslategray inline-block ">
          {short_description}
        </div>
      </div>
    </div>
  );
};

export default Card;

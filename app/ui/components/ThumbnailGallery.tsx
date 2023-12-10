"use client";

import React, { useState } from "react";
import Image from "next/image";

type media = { media: string[] | undefined };

const ThumbnailGallery = ({ media }: media) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-1 rounded-[3px] h-[max-content] w-[max-content] p-[7px] bg-[#3d4550]">
      <div className="flex gap-1 sm:flex-col">
        {media &&
          media.length > 1 &&
          media.map((image: string, index: number) => (
            <img
              alt="thumbnail image of listing"
              className=" object-cover w-[60px] h-[60px]"
              onMouseOver={() => setImageIndex(index)}
              onClick={() => setImageIndex(index)}
              key={index}
              src={image}
            />
          ))}
      </div>
      {media && (
        <div>
          <img
            className="hidden sm:block w-[360px] h-[360px] object-cover"
            src={media[imageIndex]}
            alt="Picture of the listing object"
          />
          <img
            className="sm:hidden w-[300px] h-[300px] object-cover"
            src={media[imageIndex]}
            alt="Picture of the listing object"
          />
        </div>
      )}
    </div>
  );
};

export default ThumbnailGallery;

"use client"

import React, { useState } from "react";



type media = { media: string[] };

const ThumbnailGallery = ({ media }: media) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-1 rounded-[3px] w-[max-content] p-[7px] bg-[#3d4550]">
      <div className="flex gap-1 md:flex-col">
        {media && media.length > 1 && media.map((image: string, index: number) => (
          <img className="w-[60px] h-[60px] object-cover" onMouseOver={() => (setImageIndex(index))} onClick={() => (setImageIndex(index))} key={index} src={image} />
        ))}
      </div>
      <div><img className="max-w-[300px] md:max-w-[450px]" src={media[imageIndex]} alt="" /></div>
    </div>
  );
}


export default ThumbnailGallery;
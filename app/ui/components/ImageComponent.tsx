import exp from "constants";
import React, { FC } from "react";

type ImageComponentProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  classNames?: string;
};

const ImageComponent: FC<ImageComponentProps> = ({
  src,
  alt = "test",
  width = 283,
  height = 180,
  classNames = "",
}: ImageComponentProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={` h-[${height}]  w-[${width}] object-cover  ${classNames}`}
    />
  );
};

export default ImageComponent;

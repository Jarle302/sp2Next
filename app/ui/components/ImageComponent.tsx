import React from 'react';

type ImageComponentProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    classNames?: string;
};

export default function ImageComponent({
    src,
    alt = "test",
    width = 183,
    height = 100,
    classNames = '',
}: ImageComponentProps) {
    console.log(src)
    return (
        <img
            src={src}
            alt={alt}

            className={` h-[${height}]  w-[${width}] object-cover rounded-2xl ${classNames}`}
        />
    );
}

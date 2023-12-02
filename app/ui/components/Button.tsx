import React, { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  click: MouseEventHandler;
  isSecondary?: boolean;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  click,
  isSecondary = false,
  className,
}) => {
  const buttonStyle: string = isSecondary
    ? "border-solid border-2 border-red-200"
    : "bg-red-200";

  return (
    <button
      onClick={click}
      className={`${buttonStyle} drop-shadow-md rounded-[9px] p-2 font-semibold text-gray-600 box-border ${className}`}>
      {children}
    </button>
  );
};

export default Button;

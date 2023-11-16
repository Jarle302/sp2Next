import React, { FC, MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
    click: MouseEventHandler;
    isSecondary?: boolean;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, click, isSecondary = false }) => {
    const buttonStyle: string = isSecondary ? "border-solid border-2 border-red-200" : "bg-red-200";

    return (
        <button onClick={click} className={`${buttonStyle} drop-shadow-md rounded-[9px] p-2 font-semibold text-gray-600 box-border`}>
            {children}
        </button>
    );
};

export default Button;
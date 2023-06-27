"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  isDisabled,
  btnType,
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;

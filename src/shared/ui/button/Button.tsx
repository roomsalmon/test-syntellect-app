import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button = ({
  type = "button",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        { [styles.fullWidth]: fullWidth },
        className
      )}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

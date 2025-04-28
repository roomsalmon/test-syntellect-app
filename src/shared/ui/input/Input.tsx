import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
  label?: string;
}

export const Input = ({
  className,
  error = false,
  fullWidth = false,
  label,
  ...props
}: InputProps) => {
  return (
    <div className={cn(styles.wrapper, { [styles.fullWidth]: fullWidth })}>
      {label && <label>{label}</label>}
      <input
        className={cn(
          styles.input,
          { [styles.error]: error, [styles.fullWidth]: fullWidth },
          className
        )}
        {...props}
      />
    </div>
  );
};

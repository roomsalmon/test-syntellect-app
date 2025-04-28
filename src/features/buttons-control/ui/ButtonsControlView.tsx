import React from "react";
import styles from "./ButtonsControlView.module.scss";
import { ButtonProps } from "../types";
import { Button } from "../../../shared/ui/button";
import { Input } from "../../../shared/ui/input";
import cn from "classnames";

interface ButtonsControlViewProps {
  value: string;
  onChange: (value: string) => void;
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
}

export const ButtonsControlView = ({
  value,
  onChange,
  leftButtons,
  rightButtons,
}: ButtonsControlViewProps) => {
  return (
    <div className={cn(styles.container)}>
      <div className={styles.group}>
        {leftButtons?.map((button, index) => (
          <Button
            key={`left-${index}`}
            onClick={() => button.onClick(value, onChange)}
            className={styles.button}
          >
            {button.text}
          </Button>
        ))}
      </div>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />

      <div className={styles.group}>
        {rightButtons?.map((button, index) => (
          <Button
            key={`right-${index}`}
            onClick={() => button.onClick(value, onChange)}
            className={styles.button}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

import React, { ReactNode } from "react";
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
  const renderButtons = (buttons: ButtonProps[], prefix: string): ReactNode => {
    return buttons.map((button, index) => (
      <Button
        key={`${prefix}-${index}`}
        onClick={() => button.onClick(value, onChange)}
        className={styles.button}
      >
        {button.text}
      </Button>
    ));
  };

  return (
    <div className={cn(styles.container)}>
      {leftButtons && (
        <div className={styles.group}>{renderButtons(leftButtons, "left")}</div>
      )}

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        placeholder="Buttons control"
      />

      {rightButtons && (
        <div className={styles.group}>
          {renderButtons(rightButtons, "right")}
        </div>
      )}
    </div>
  );
};

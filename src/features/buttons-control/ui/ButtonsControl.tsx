import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { ButtonProps, ButtonsControlProps } from "../types";
import { Button } from "../../../shared/ui/button";
import { Input } from "../../../shared/ui/input";
import cn from "classnames";
import styles from "./ButtonsControlView.module.scss";
import { useButtonsControl } from "../hooks/useButtonsControl";

export const ButtonsControl = observer(
  ({ leftButtons, rightButtons, defaultValue }: ButtonsControlProps) => {
    const { value, onChange } = useButtonsControl(defaultValue ?? "");

    const renderButtons = (
      buttons: ButtonProps[],
      prefix: string
    ): ReactNode => {
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
          <div className={styles.group}>
            {renderButtons(leftButtons, "left")}
          </div>
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
  }
);

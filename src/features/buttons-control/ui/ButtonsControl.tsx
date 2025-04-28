import React from "react";
import { observer } from "mobx-react-lite";
import { ButtonsControlProps } from "../types";
import ButtonsControlModel from "../model/ButtonsControlModel";
import { ButtonsControlView } from "./ButtonsControlView";

export const ButtonsControl = observer(
  ({ leftButtons, rightButtons, defaultValue }: ButtonsControlProps) => {
    const model = React.useMemo(
      () => new ButtonsControlModel(defaultValue),
      [defaultValue]
    );

    return (
      <ButtonsControlView
        value={model.value}
        onChange={model.setValue}
        leftButtons={leftButtons}
        rightButtons={rightButtons}
      />
    );
  }
);

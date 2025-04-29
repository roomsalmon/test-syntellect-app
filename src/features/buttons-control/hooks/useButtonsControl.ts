import React from "react";
import ButtonsControlModel from "../model/ButtonsControlModel";

export const useButtonsControl = (defaultValue: string) => {
  const model = React.useMemo(
    () => new ButtonsControlModel(defaultValue),
    [defaultValue]
  );

  return {
    value: model.value,
    onChange: model.setValue,
  };
};

import React from "react";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";
import { ButtonsControl } from "../../../features/buttons-control";

export const SecondButtonsControlsCase = () => {
  return (
    <Section>
      <Text.H1>Buttons control DEMO #2</Text.H1>
      <ButtonsControl
        rightButtons={[
          {
            text: "Alert this",
            onClick: (value) => alert(value),
          },
        ]}
        leftButtons={[
          {
            text: "Check if is number",
            onClick: (value) => {
              if (Number.isFinite(Number(value))) {
                alert(value);
              }
            },
          },
        ]}
      />
    </Section>
  );
};

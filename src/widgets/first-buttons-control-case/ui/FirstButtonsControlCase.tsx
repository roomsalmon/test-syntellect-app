import React from "react";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";
import { ButtonsControl } from "../../../features/buttons-control";

export const FirstButtonsControlsCase = () => {
  return (
    <Section>
      <Text.H1>Buttons control DEMO #1</Text.H1>
      <ButtonsControl
        rightButtons={[
          {
            text: "Clear",
            onClick: (_, setValue) => setValue(""),
          },
          {
            text: "Hello World",
            onClick: (_, setValue) => setValue("Hello world!"),
          },
        ]}
      />
    </Section>
  );
};

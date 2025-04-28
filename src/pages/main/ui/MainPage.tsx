import { ButtonsControl } from "../../../features/buttons-control";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";

export const MainPage = () => {
  return (
    <Section>
      <Text.H1>Заголовок</Text.H1>
      <ButtonsControl
        rightButtons={[
          {
            text: "Clear",
            onClick: (_, clearValue) => clearValue(""),
          },
          {
            text: "Hello World",
            onClick: (_, setValue) => setValue("Hello world!"),
          },
        ]}
        leftButtons={[
          {
            text: "Слева",
            onClick: (_, setValue) => setValue("Слева"),
          },
        ]}
      />
    </Section>
  );
};

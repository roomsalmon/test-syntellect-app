import { Button } from "../../../shared/ui/button";
import { Input } from "../../../shared/ui/input";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";

export const MainPage = () => {
  return (
    <Section>
      <Text.H1>Заголовок</Text.H1>
      <Input placeholder="Инпут"></Input>
      <Button>Кнопка</Button>
    </Section>
  );
};

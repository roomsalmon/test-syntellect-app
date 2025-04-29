import { FirstAutocompleteControlCase } from "../../../widgets/first-autocomplete-control-case/ui/FirstAutocompleteControlCase";
import { FirstButtonsControlsCase } from "../../../widgets/first-buttons-control-case";
import { SecondButtonsControlsCase } from "../../../widgets/second-buttons-control-case";

export const MainPage = () => {
  return (
    <>
      <FirstButtonsControlsCase />
      <SecondButtonsControlsCase />
      <FirstAutocompleteControlCase />
    </>
  );
};

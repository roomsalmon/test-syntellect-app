import React from "react";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";
import { AutocompleteControl } from "../../../features/autocomplete-control";

export const SecondAutocompleteControlCase = () => {
  return (
    <Section>
      <Text.H1>Autocomplete control DEMO #2 (max 10 suggestion)</Text.H1>
      <AutocompleteControl maxSuggestions={10} />
    </Section>
  );
};

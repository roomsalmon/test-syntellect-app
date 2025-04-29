import React from "react";
import { Section } from "../../../shared/ui/section";
import { Text } from "../../../shared/ui/text";
import { AutocompleteControl } from "../../../features/autocomplete-control";

export const FirstAutocompleteControlCase = () => {
  return (
    <Section>
      <Text.H1>Autocomplete control DEMO #1 (max 3 suggestion)</Text.H1>
      <AutocompleteControl maxSuggestions={3} />
    </Section>
  );
};

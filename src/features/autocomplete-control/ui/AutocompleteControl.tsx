import React from "react";
import { observer } from "mobx-react-lite";
import { Autocomplete } from "../../../shared/ui/autocomplete";
import { CountrySuggestionItem } from "./CountrySuggestionItem";
import { Country } from "../../../entities/country";
import { useAutocompleteControl } from "../hooks/useAutoCompleteControl";

export interface AutocompleteControlProps {
  maxSuggestions?: number;
  placeholder?: string;
}

export const AutocompleteControl = observer(
  ({
    maxSuggestions = 5,
    placeholder = "Search country...",
  }: AutocompleteControlProps) => {
    const { query, suggestions, isLoading, setQuery, selectSuggestion } =
      useAutocompleteControl(maxSuggestions);

    const renderCountryItem = (country: Country) => (
      <CountrySuggestionItem country={country} onClick={selectSuggestion} />
    );

    return (
      <Autocomplete<Country>
        value={query}
        items={suggestions}
        onChange={setQuery}
        onClick={selectSuggestion}
        renderItem={renderCountryItem}
        placeholder={placeholder}
        isLoading={isLoading}
        maxItems={maxSuggestions}
      />
    );
  }
);

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Autocomplete } from "../../../shared/ui/autocomplete";
import AutocompleteControlModel from "../model/AutocompleteControlModel";
import { CountrySuggestionItem } from "./CountrySuggestionItem";
import { Country } from "../../../entities/country";

export interface AutocompleteControlProps {
  maxSuggestions?: number;
  debounceDelay?: number;
  placeholder?: string;
}

const AutocompleteControl = observer(
  ({
    maxSuggestions = 5,
    placeholder = "Search country...",
  }: AutocompleteControlProps) => {
    const model = React.useMemo(
      () => new AutocompleteControlModel(maxSuggestions),
      [maxSuggestions]
    );

    useEffect(() => {
      model.loadSuggestions();
    }, [model.query]);

    const renderCountryItem = (country: Country) => (
      <CountrySuggestionItem
        country={country}
        onClick={model.selectSuggestion}
      />
    );

    return (
      <Autocomplete<Country>
        value={model.query}
        items={model.suggestions}
        onChange={model.setQuery}
        onClick={model.selectSuggestion}
        renderItem={renderCountryItem}
        placeholder={placeholder}
        isLoading={model.isLoading}
        maxItems={maxSuggestions}
      />
    );
  }
);

export default AutocompleteControl;

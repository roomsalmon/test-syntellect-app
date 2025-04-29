import { useEffect, useMemo, useCallback } from "react";
import AutocompleteControlModel from "../model/AutocompleteControlModel";
import { debounce } from "../../../shared/lib";

export const useAutocompleteControl = (
  maxSuggestions: number,
  debounceDelay: number = 500
) => {
  const model = useMemo(
    () => new AutocompleteControlModel(maxSuggestions),
    [maxSuggestions]
  );

  const debouncedLoadSuggestions = useCallback(
    debounce(() => {
      model.loadSuggestions();
    }, debounceDelay),
    [debounceDelay, model]
  );

  useEffect(() => {
    debouncedLoadSuggestions();
  }, [model.query, debouncedLoadSuggestions]);

  return {
    query: model.query,
    suggestions: model.suggestions,
    isLoading: model.isLoading,
    setQuery: model.setQuery,
    selectSuggestion: model.selectSuggestion,
  };
};

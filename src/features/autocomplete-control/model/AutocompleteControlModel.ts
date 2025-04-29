import { makeAutoObservable, runInAction } from "mobx";
import { fetchCountries } from "../api/fetchCountries";
import { Country } from "../../../entities/country";
import { isNonEmptyString } from "../../../shared/lib";

class AutocompleteControlModel {
  query: string = "";
  suggestions: Country[] = [];
  isLoading: boolean = false;
  maxSuggestions: number;

  constructor(maxSuggestions: number = 5) {
    makeAutoObservable(this);
    this.maxSuggestions = maxSuggestions;
  }

  setQuery = (value: string) => {
    this.query = value;
  };

  loadSuggestions = async () => {
    if (!isNonEmptyString(this.query)) {
      runInAction(() => {
        this.clearSuggestions();
      });
      return;
    }

    this.isLoading = true;

    try {
      const data = await fetchCountries(this.query);
      runInAction(() => {
        this.suggestions = data.slice(0, this.maxSuggestions);
      });
    } catch (error) {
      runInAction(() => {
        console.error("Failed to load sugestions");
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  selectSuggestion = (country: Country) => {
    this.query = country.name;
    this.clearSuggestions();
  };

  clearSuggestions = () => {
    this.suggestions = [];
  };
}

export default AutocompleteControlModel;

import { makeAutoObservable, runInAction } from "mobx";
import { fetchCountries } from "../api/countryApi";
import { Country } from "../../../entities/country";

class AutocompleteControlModel {
  query: string = "";
  suggestions: Country[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  maxSuggestions: number;

  constructor(maxSuggestions: number = 5) {
    makeAutoObservable(this);
    this.maxSuggestions = maxSuggestions;
  }

  setQuery = (value: string) => {
    this.query = value;
    this.loadSuggestions();
  };

  loadSuggestions = async () => {
    if (!this.query.trim()) {
      runInAction(() => {
        this.suggestions = [];
      });
      return;
    }

    this.isLoading = true;
    this.error = null;

    try {
      const data = await fetchCountries(this.query);
      runInAction(() => {
        this.suggestions = data.slice(0, this.maxSuggestions);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Failed to load suggestions";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  selectSuggestion = (country: Country) => {
    this.query = country.name;
    this.suggestions = [];
  };
}

export default AutocompleteControlModel;

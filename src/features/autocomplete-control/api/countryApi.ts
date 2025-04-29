import { Country } from "../../../entities/country";
import { getCountryByName } from "../../../shared/api/apiService";

export const fetchCountries = async (name: string): Promise<Country[]> => {
  try {
    return await getCountryByName(name);
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
};

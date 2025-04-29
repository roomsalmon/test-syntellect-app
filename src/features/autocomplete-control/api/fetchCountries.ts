import { Country } from "../../../entities/country";
import { CountryInfo, getCountryByName } from "../../../shared/api/apiService";

function mapCountryInfoToCountry(countriesResponse: CountryInfo[]): Country[] {
  return countriesResponse.map((country) => {
    return {
      name: country?.name ?? "",
      fullName: country?.fullName ?? "",
      flag: country?.flag ?? "",
    };
  });
}

export const fetchCountries = async (name: string): Promise<Country[]> => {
  try {
    const response: CountryInfo[] = await getCountryByName(name);

    return mapCountryInfoToCountry(response);
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
};

import React from "react";
import { Country } from "../../../entities/country";
import styles from "./CountrySuggestionItem.module.scss";
import { SelectItem } from "../../../shared/ui/select-item";

interface CountrySuggestionItemProps {
  country: Country;
  onClick: (country: Country) => void;
  isHighlighted?: boolean;
}

export const CountrySuggestionItem = ({
  country,
  onClick,
}: CountrySuggestionItemProps) => {
  return (
    <SelectItem<Country>
      onClick={() => onClick(country)}
      item={country}
      renderItem={(item) => {
        return (
          <div className={styles.wrapper}>
            <img src={item.flag} className={styles.flag} />
            <div className={styles.text}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.fullName}>{item.fullName}</div>
            </div>
          </div>
        );
      }}
    />
  );
};

import React from "react";
import { Input } from "../input";
import { SelectPane } from "../select-pane";
import styles from "./Autocomplete.module.scss";
import cn from "classnames";
import { useAutocomplete } from "./hooks/useAutocomplete";

interface AutocompleteProps<T> {
  value: string;
  items: T[];
  onChange: (value: string) => void;
  onClick: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  placeholder?: string;
  isLoading?: boolean;
  maxItems?: number;
}

export const Autocomplete = <T,>({
  value,
  items,
  onChange,
  onClick,
  renderItem,
  placeholder,
  isLoading = false,
  maxItems = 5,
}: AutocompleteProps<T>) => {
  const {
    isOpen,
    wrapperRef,
    filteredItems,
    handleClick,
    handleInputChange,
    handleInputFocus,
  } = useAutocomplete({
    items,
    onChange,
    onClick,
    maxItems,
  });

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper)}>
      <Input
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        className={styles.input}
      />

      {isOpen && !isLoading && (
        <SelectPane
          items={filteredItems}
          renderItem={renderItem}
          onClick={handleClick}
        />
      )}

      {isLoading && <div className={styles.loader}></div>}
    </div>
  );
};

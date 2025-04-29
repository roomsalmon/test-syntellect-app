import React, { useState, useRef, useEffect } from "react";
import { Input } from "../input";
import { SelectPane } from "../select-pane";
import styles from "./Autocomplete.module.scss";
import cn from "classnames";

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
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.slice(0, maxItems);

  const handleClick = (item: T) => {
    onClick(item);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper)}>
      <Input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
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

      {isLoading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

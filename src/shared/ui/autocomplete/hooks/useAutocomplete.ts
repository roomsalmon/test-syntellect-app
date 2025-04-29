import { useState, useRef, useEffect } from "react";

interface UseAutocompleteProps<T> {
  items: T[];
  onChange: (value: string) => void;
  onClick: (item: T) => void;
  maxItems: number;
}

export const useAutocomplete = <T>({
  items,
  onChange,
  onClick,
  maxItems = 5,
}: UseAutocompleteProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.slice(0, maxItems);

  const handleClick = (item: T) => {
    onClick(item);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleInputFocus = () => setIsOpen(true);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    isOpen,
    setIsOpen,
    wrapperRef,
    filteredItems,
    handleClick,
    handleInputChange,
    handleInputFocus,
  };
};

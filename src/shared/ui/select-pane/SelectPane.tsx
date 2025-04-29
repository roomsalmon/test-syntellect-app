import React from "react";
import { SelectItem } from "../select-item";
import styles from "./SelectPane.module.scss";
import cn from "classnames";

interface SelectPaneProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}

export const SelectPane = <T,>({
  items,
  renderItem,
  onClick,
}: SelectPaneProps<T>) => {
  if (items.length === 0) return null;

  return (
    <ul className={cn(styles.wrapper)}>
      {items.map((item, index) => (
        <SelectItem
          key={index}
          item={item}
          renderItem={renderItem}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

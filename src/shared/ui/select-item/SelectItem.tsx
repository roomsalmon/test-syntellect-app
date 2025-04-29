import React from "react";
import styles from "./SelectItem.module.scss";
import cn from "classnames";

interface SelectItemProps<T> {
  item: T;
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
  isHighlighted?: boolean;
}

export const SelectItem = <T,>({
  item,
  renderItem,
  onClick,
}: SelectItemProps<T>) => {
  return (
    <li className={cn(styles.item)} onClick={() => onClick(item)}>
      {renderItem(item)}
    </li>
  );
};

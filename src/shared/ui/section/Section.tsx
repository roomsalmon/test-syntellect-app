import React, { ReactNode } from "react";
import styles from "./Section.module.scss";
import cn from "classnames";

interface SectionProps {
  children?: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section>
      <div className={cn(styles.container)}>{children}</div>
    </section>
  );
};

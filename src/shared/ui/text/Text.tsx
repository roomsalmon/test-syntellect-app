import React, { ReactNode } from "react";

interface HeadingProps {
  children?: ReactNode;
}

interface HeadingComposition {
  P: React.FC<HeadingProps>;
  H1: React.FC<HeadingProps>;
  H2: React.FC<HeadingProps>;
  H3: React.FC<HeadingProps>;
  H4: React.FC<HeadingProps>;
  H5: React.FC<HeadingProps>;
  H6: React.FC<HeadingProps>;
}

const Text: React.FC<HeadingProps> & HeadingComposition = ({ children }) => {
  return <h1>{children}</h1>;
};

Text.P = ({ children }) => <p>{children}</p>;
Text.H1 = ({ children }) => <h1>{children}</h1>;
Text.H2 = ({ children }) => <h2>{children}</h2>;
Text.H3 = ({ children }) => <h3>{children}</h3>;
Text.H4 = ({ children }) => <h4>{children}</h4>;
Text.H5 = ({ children }) => <h5>{children}</h5>;
Text.H6 = ({ children }) => <h6>{children}</h6>;

export { Text };

export interface ButtonProps {
  text: string;
  onClick: (currentValue: string, setValue: (value: string) => void) => void;
}

export interface ButtonsControlProps {
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
  defaultValue?: string;
  className?: string;
}

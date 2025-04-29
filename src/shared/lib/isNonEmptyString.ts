export const isNonEmptyString = (value: string) => {
  if (value?.trim() !== "") {
    return true;
  }
  return false;
};

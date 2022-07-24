export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const dateToString = (value: Date) => {
  const year = value.getFullYear();
  const month = ("0" + (value.getMonth() + 1)).slice(-2);
  const day = ("0" + value.getDate()).slice(-2);
  const dateString = `${year}-${month}-${day}`;
  return dateString;
};

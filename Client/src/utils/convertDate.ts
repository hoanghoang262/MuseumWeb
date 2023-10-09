const toDDMMYYY = (dateraw: string) => {
  // Create a Date object from the input string
  const date = new Date(dateraw);

  // Get the day, month, and year components
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getUTCFullYear();

  // Create the formatted date string
  return `${day}/${month}/${year}`;
};

export { toDDMMYYY };

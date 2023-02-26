function convertDate(dateString: string): string {
  const parts = dateString.split("-");
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

export default convertDate;

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const generatePaginatedList = <T>(
  data: T[],
  page: number,
  limit: number
): T[] => {
  const validPage = page || 1;
  const start = (validPage - 1) * limit;
  const end = start + limit;

  return data.slice(start, end);
};

// delay function for testing purposes
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

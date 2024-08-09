export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const getPaginationRange = (currentPage: number, totalPages: number) => {
  const range = [];
  const delta = 2; // Number of pages to show around the current page
  const startRange = Math.max(2, currentPage - delta); // Start range after the first page
  const endRange = Math.min(totalPages - 1, currentPage + delta); // End range before the last page

  // Add the first page
  if (currentPage > delta + 2) {
    range.push(1);
    if (currentPage > delta + 3) {
      range.push("...");
    }
  }

  // Add pages around the current page
  for (let i = startRange; i <= endRange; i++) {
    range.push(i);
  }

  // Add the last page
  if (currentPage < totalPages - delta - 1) {
    if (currentPage < totalPages - delta - 2) {
      range.push("...");
    }
    range.push(totalPages);
  }

  return range;
};

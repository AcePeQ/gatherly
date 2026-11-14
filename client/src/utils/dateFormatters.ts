const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

export function parseDateOnly(date: string) {
  return new Date(`${date}T00:00:00Z`);
}

export function formatDate(date: string) {
  return dateFormatter.format(parseDateOnly(date));
}

export function formatDateRange(startDate: string, endDate: string) {
  return dateFormatter.formatRange(
    parseDateOnly(startDate),
    parseDateOnly(endDate),
  );
}


export function formatDateToString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
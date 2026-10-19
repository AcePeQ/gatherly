const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

function parseDateOnly(date: string) {
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

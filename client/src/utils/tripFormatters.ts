const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

function parseDateOnly(date: string) {
  return new Date(`${date}T00:00:00Z`).getTime();
}

function getCurrentDateOnly(referenceDate: Date) {
  return Date.UTC(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  );
}

export function formatTravelersCount(travelersCount: number) {
  const label = travelersCount === 1 ? "traveler" : "travelers";

  return `${travelersCount} ${label}`;
}

export function getTripTimingLabel(
  startDate: string,
  endDate: string,
  referenceDate = new Date(),
) {
  const startTime = parseDateOnly(startDate);
  const endTime = parseDateOnly(endDate);
  const currentTime = getCurrentDateOnly(referenceDate);

  if (currentTime > endTime) return "Completed";
  if (currentTime >= startTime) return "Ongoing";

  const daysUntilStart = Math.ceil(
    (startTime - currentTime) / MILLISECONDS_PER_DAY,
  );

  if (daysUntilStart === 1) return "Tomorrow";

  return `In ${daysUntilStart} days`;
}

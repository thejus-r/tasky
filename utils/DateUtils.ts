import { locale } from "../config/locale";

// Checks if the dates are same
export function isSameDate(date1: Date, date2: Date = new Date()): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function getWeekIndex(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(
    ((date.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7
  );
}

export function addDays(date: Date, days: number): Date {
  let next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function getWeekDays(start: Date): Date[] {
  return [0, 1, 2, 3, 4, 5, 6].map((itr) => addDays(start, itr));
}

export function getWeekDay(date: Date): String {
  return date.toLocaleDateString(locale, { weekday: "short" });
}

export function weekMoment(date: Date, add: number = 1) {
  const next = new Date(date);
  next.setDate(date.getDate() - (date.getDay() || 7) + add);
  return next;
}

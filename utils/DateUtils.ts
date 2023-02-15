import { locale } from "@/config/locale"

// Checks if same date
export function isSameDate(date1: Date, date2: Date = new Date()): boolean {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
}

// Return a week index as a number from the date passed as an argument.
// (args: Date)
export function getWeekIndex(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date.getTime() - start.getTime()) / 86400000) + start.getDay() + 1) / 7);
}


// Return a date, by adding the date passed to the number of days.
// (args: Date & a no. of days to be added)
export function addDays(date: Date, days: number): Date {
    let next = new Date(date)
    next.setDate(next.getDate() + days)
    return next
}


// Returns an array of days of the week with starting date as an argument.
// (args: Starting date of the week)
export function getWeekDays(start: Date): Date[] {
    return [0, 1, 2, 3, 4, 5, 6].map(itr => addDays(start, itr))
}



export function getWeekDay(date: Date): String {
    return date.toLocaleDateString(locale, { weekday: 'short' });
}

export function weekMoment(date: Date, add: number = 1) {
    const next = new Date(date);
    next.setDate(date.getDate() - (date.getDay() || 7) + add)
    return next;
}

// Type for the CalendarView, that will be used as a context
export type CalendarView = {
    active: Date,
    current: Date,
    weekIndex: number,
    startOfWeek: Date,
    endOfWeek: Date
}

export function getCalendraView(active: Date, startOfWeek: Date | null): CalendarView {
    startOfWeek = startOfWeek ?? weekMoment(active)
    const current = new Date()
    return {
        active,
        current,
        weekIndex: getWeekIndex(startOfWeek),
        startOfWeek,
        endOfWeek: weekMoment(current, 7)
    }
}

export function fmtDateAndTime(date: string, time: string): Date {
    return new Date(date + "T" + time);
}
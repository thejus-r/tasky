import { test, describe, expect, beforeEach } from "vitest";
import { isSameDate, getWeekIndex, addDays } from "./DateUtils";

describe("Same Date", () => {
  test("checks if its today when only 1 date is passed as an argument", () => {
    const date = new Date();
    const result = isSameDate(date);
    expect(result).toBe(true);
  });

  test("Returns true if two same dates are passed as args", () => {
    const date1 = new Date("12-03-2018");
    const date2 = new Date("12-03-2018");
    const result = isSameDate(date1, date2);
    expect(result).toBe(true);
  });

  test("Returns false if two diffrent dates are passed as args", () => {
    const date1 = new Date("13-03-2018");
    const date2 = new Date("12-03-2018");
    const result = isSameDate(date1, date2);
    expect(result).toBe(false);
  });
});

describe("WeekIndex", () => {
  test("Gives the correct week index when a date is passed", () => {
    const index = getWeekIndex(new Date("1-1-2023"));
    expect(index).toBe(1);
  });
});

describe("Adding days", () => {
  test("Returns a correct date", () => {
    const date = addDays(new Date("12-01-2023"), 5);
    expect(isSameDate(date, new Date("12-06-2023"))).toBe(true);
  });
});

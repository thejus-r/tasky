"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { locale } from "@/config/locale";
import {
  addDays,
  getCalendraView,
  getWeekDay,
  getWeekDays,
  isSameDate,
} from "@/utils/DateUtils";
import useWeekStore from "@/stores/weekStore";

export default function WeekView() {
  const today = new Date();
  const active = useWeekStore((state) => state.active);
  const setActive = useWeekStore((state) => state.setActive);
  const [calendraView, setCalendraView] = useState(
    getCalendraView(active, null)
  );

  // function that resets weekView to current week
  function resetToThisWeek() {
    let thisWeek = getCalendraView(active, null);
    setActive(today);
    setCalendraView(thisWeek);
  }

  // Changes to prev or next week
  function changeWeek(add: number): void {
    let newWeek = getCalendraView(
      active,
      addDays(calendraView.startOfWeek, add)
    );
    setCalendraView(newWeek);
  }
  const days = getWeekDays(calendraView.startOfWeek);

  return (
    <>
      <div className="flex justify-between">
        <button
          onClick={() => resetToThisWeek()}
          className="rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg"
        >
          Today
        </button>
        <div className="flex gap-6">
          <button onClick={() => changeWeek(-7)}>
            <ChevronLeftIcon className="h-8 w-8 stroke-stone-50" />
          </button>
          <button onClick={() => changeWeek(7)}>
            <ChevronRightIcon className="h-8 w-8 stroke-stone-100" />
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between gap-2">
        {days.map((day, index) => {
          return (
            <Day
              key={index}
              date={day}
              isActive={day.getDate() === active.getDate()}
            />
          );
        })}
      </div>
    </>
  );
}

type DayProps = {
  isActive?: Boolean;
  date: Date;
};

function Day({ isActive, date }: DayProps) {
  const setActive = useWeekStore((state) => state.setActive);
  const isToday = isSameDate(date);
  return (
    <button
      onClick={() => setActive(date)}
      className={`relative flex h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-stone-800 bg-stone-800/25 text-center transition-all duration-500 hover:brightness-125  ${
        isActive ? "border-green-600 bg-green-900" : ""
      }`}
    >
      <p className="font-bold text-stone-300 ">{getWeekDay(date)}</p>
      <p className="text-2xl font-bold">{date.getDate()}</p>
      {isToday && (
        <div className="absolute bottom-3 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
      )}
    </button>
  );
}

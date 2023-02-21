"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { addDays, getCalendraView, getWeekDays } from "@/utils/DateUtils";
import useWeekStore from "@/stores/weekStore";
import DayCard from "./DayCard";

export default function WeekView() {
  const today = new Date();
  const active = useWeekStore((state) => state.active);
  const setActive = useWeekStore((state) => state.setActive);
  const [calendraView, setCalendraView] = useState(
    getCalendraView(active, null)
  );

  console.log(active)
  // function that resets weekView to current week
  const handleReset = () => {
    let thisWeek = getCalendraView(active, null);
    setCalendraView(thisWeek);
    setActive(today);
  };

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
          onClick={handleReset}
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
      <div className="flex w-full justify-between gap-1.5 md:gap-2">
        {days.map((day, index) => {
          return <DayCard key={index} date={day} />;
        })}
      </div>
    </>
  );
}

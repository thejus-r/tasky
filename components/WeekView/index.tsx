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

export default function WeekView() {
  const current = new Date();
  const [active, setActive] = useState(current);
  const [calendraView, setCalendraView] = useState(
    getCalendraView(active, null)
  );

  // function that resets weekView to current week
  function resetToThisWeek() {
    let thisWeek = getCalendraView(active, null);
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

        <button onClick={() => resetToThisWeek()} className="text-lg font-semibold px-2.5 py-1.5 border-2 rounded-xl bg-stone-800/25 hover:brightness-125 transition-all duration-500 border-stone-800">
          {new Date().toLocaleDateString(locale, { dateStyle: "medium" })}
        </button>
        <div className="flex gap-4">
          <button onClick={() => changeWeek(-7)}>
            <ChevronLeftIcon className="stroke-stone-50 h-8 w-8" />
          </button>
          <button onClick={() => changeWeek(7)} >
            <ChevronRightIcon className="stroke-stone-100 h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="flex gap-2 justify-between w-full">
        {days.map((day, index) => {
          return <Day key={index} date={day} />;
        })}
      </div>
    </>
  );
}

type DayProps = {
  isActive?: Boolean;
  date: Date;
};

function Day({ isActive = true, date }: DayProps) {
  const isToday = isSameDate(date);
  return (
<button className={`w-full flex justify-center relative items-center flex-col text-center border-2 border-stone-800 hover:brightness-125 transition-all duration-500 bg-stone-800/25 rounded-xl h-32  ${isActive ? "" : "bg-stone-700"}`}>
      <p className="font-bold text-stone-300 ">{getWeekDay(date)}</p>
      <p className="text-2xl font-bold">{date.getDate()}</p>
      {isToday && <div className="absolute h-2 w-2 bottom-3 bg-green-500 rounded-full animate-pulse"></div>}
    </button>
  );
}

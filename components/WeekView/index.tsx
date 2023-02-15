"use-client";
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
      <div className="week-view-header">
        <button onClick={() => resetToThisWeek()} className="current-date">
          {new Date().toLocaleDateString(locale, { dateStyle: "medium" })}
        </button>
        <div className="changeWeekBtn-container">
          <button onClick={() => changeWeek(-7)} className="changeWeekBtn">
            <ChevronLeftIcon className="icon" />
          </button>
          <button onClick={() => changeWeek(7)} className="changeWeekBtn">
            <ChevronRightIcon className="icon" />
          </button>
        </div>
      </div>
      <div className="week-view">
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
    <div className={`dayBlock ${false ? "active" : ""}`}>
      <p className="day">{getWeekDay(date)}</p>
      <p className="date">{date.getDate()}</p>
      {isToday && <div className="indicator"></div>}
    </div>
  );
}

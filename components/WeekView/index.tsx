"use-client";

import { locale } from "@/config/locale";
import {
  getWeekDay,
  getWeekDays,
  getWeekIndex,
  isSameDate,
} from "@/utils/DateUtils";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function WeekView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = getWeekDays(currentDate);

  const prevWeek = () => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  return (
    <>
      <div className="week-view-header">
        <h3 className="current-date">
          {new Date().toLocaleDateString(locale, { dateStyle: "medium" })}
        </h3>
        <div className="changeWeekBtn-container">
          <button onClick={prevWeek} className="changeWeekBtn">
            <ChevronLeftIcon className="icon" />
          </button>
          <button onClick={nextWeek} className="changeWeekBtn">
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

"use client";

import useWeekStore from "@/store/weekStore";
import { getWeekDays, isSameDate, weekMoment } from "@/utils/DateUtils";
import DayTile from "./DayTile";

function WeekView() {
  const { today, active, setActive } = useWeekStore();
  const weekDays = getWeekDays(weekMoment(active));

  function handleClick(date: Date): void {
    setActive(date);
  }
  return (
    <div className="flex justify-between gap-2">
      {weekDays.map((day, index) => (
        <DayTile
          handleClick={handleClick}
          isActive={isSameDate(day, active)}
          isToday={isSameDate(day)}
          date={day}
          key={index}
        />
      ))}
    </div>
  );
}

export default WeekView;
import useWeekStore from "../../app/weekStore";
import { getWeekDays, isSameDate, weekMoment } from "../../utils/DateUtils";
import DayTile from "./DayTile";
import WeekNav from "./WeekNav";

function WeekView() {
  const { today, active, setActive } = useWeekStore();
  const weekDays = getWeekDays(weekMoment(active));

  function handleClick(date: Date): void {
    setActive(date);
  }
  return (
    <>
      <div className="flex px-4 justify-between gap-1 md:gap-2">
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
      <WeekNav />
    </>
  );
}

export default WeekView;

import {
  getWeekDay,
  getWeekDays,
  getWeekIndex,
  isSameDate,
} from "@/utils/DateUtils";

type Day = {
  day: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  date: Number;
};

export default function WeekView() {
  let nextDate = new Date();
  const days = getWeekDays(nextDate);
  console.log(nextDate);
  return (
    <>
      <h3>{getWeekIndex(nextDate)}</h3>
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

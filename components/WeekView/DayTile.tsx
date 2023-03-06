import { getWeekDay } from "@/utils/DateUtils";

type DayTileProps = {
  date: Date;
  isToday: boolean;
  isActive: boolean;
  handleClick: (date: Date) => void;
};

export default function DayTile({
  date,
  isToday,
  isActive,
  handleClick,
}: DayTileProps) {
  return (
    <button
      onClick={() => handleClick(date)}
      className="bg-stone-800 text-white h-20 w-full"
    >
      {getWeekDay(date)}
      {date.getDate()}
      {isToday && "Today"}
      {isActive && "Active"}
    </button>
  );
}

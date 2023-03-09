import { getWeekDay } from "../../utils/DateUtils";

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
      className={`rounded-md flex flex-col items-center transition-all duration-500 justify-center relative border-2 text-white h-24 w-full ${
        isActive
          ? "bg-green-900/75 border-green-600"
          : "bg-stone-800 border-stone-700"
      }`}
    >
      <p className="text-xs text-stone-400 uppercase font-bold ">
        {getWeekDay(date)}
      </p>
      <p className="text-lg font-semibold">{date.getDate()}</p>
      {isToday && (
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse absolute bottom-2"></div>
      )}
    </button>
  );
}

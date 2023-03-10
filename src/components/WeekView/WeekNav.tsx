import useWeekStore from "../../app/store";
import { addDays, isSameDate } from "../../utils/DateUtils";

export default function WeekNav() {
  const { setActive, active, today } = useWeekStore();
  const isToday = isSameDate(active, today);
  return (
    <div className="flex p-4 items-center justify-between">
      <button
        onClick={() => setActive(today)}
        className="border-2 transition-all duration-300 border-green-800 rounded-xl px-3 py-1.5 bg-green-900/50  disabled:brightness-50"
        disabled={isToday}
      >
        View Today
      </button>
      <div className="flex gap-4">
        <button
          onClick={() => setActive(addDays(active, -7))}
          className="h-8 rounded-xl w-12 border-2 border-stone-600 bg-stone-700"
        >
          {"<<"}
        </button>
        <button
          onClick={() => setActive(addDays(active, -1))}
          className="h-8 rounded-xl w-12 border-2 border-stone-600 bg-stone-700"
        >
          {"<"}
        </button>
        <button
          onClick={() => setActive(addDays(active, 1))}
          className="h-8 rounded-xl w-12 border-2 border-stone-600 bg-stone-700"
        >
          {">"}
        </button>
        <button
          onClick={() => setActive(addDays(active, 7))}
          className="h-8 rounded-xl w-12 border-2 border-stone-600 bg-stone-700"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

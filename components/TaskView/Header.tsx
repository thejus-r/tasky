"use client";

import useWeekStore from "@/store/weekStore";
import { locale } from "@/config/locale";
import { addDays } from "@/utils/DateUtils";

export default function Header() {
  const active = useWeekStore((state) => state.active);
  const setActive = useWeekStore((state) => state.setActive);

  function controls(num: number) {
    setActive(addDays(active, num));
  }
  return (
    <div className="flex justify-between">
      <p className="font-medium">
        {active.toLocaleDateString(locale, { dateStyle: "long" })}
      </p>
      <div className="flex gap-2">
        {[-7, -1, 1, 7].map((val) => (
          <button
            className="bg-stone-700 border-2 border-stone-500 rounded-md w-8 h-8"
            key={val}
            onClick={() => controls(val)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

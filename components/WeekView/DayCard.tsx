"use client"

import useWeekStore from "@/stores/weekStore";
import { getWeekDay, isSameDate } from "@/utils/DateUtils";
import Link from "next/link";

export default function Day({date}:{date:Date}) {

    const active = useWeekStore((state) => state.active)
    const setActive = useWeekStore((state)=> state.setActive)
    const isToday = isSameDate(date);
    const isActive = isSameDate(date,active)
    return (
      <Link
      href = {`/tasks/${active.toISOString().slice(0,10)}`}
        onClick={()=> setActive(date)}
        className={`relative flex h-24 md:h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-stone-800 bg-stone-800/25 text-center transition-all duration-500 hover:brightness-125  ${
          isActive ? "border-green-600 bg-green-900" : ""
        }`}
      >
        <p className="font-bold text-xs md:text-base text-stone-300 ">{getWeekDay(date)}</p>
        <p className="md:text-2xl font-bold">{date.getDate()}</p>
        {isToday && (
          <div className="absolute bottom-3 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
        )}
      </Link>
    );
  }
  
"use client"

import useWeekStore from "@/stores/weekStore";
import Link from "next/link";
import { use } from "react";
import TaskCard from "./TaskCard";

async function fetchTasks(date:String) {
  const res = await fetch(`http://localhost:3000/api/date/${date}`)
  return await res.json()
}

export default function TaskList() { 
  const active = useWeekStore((state)=> state.active)
  const tasks = use(fetchTasks(active.toISOString().slice(0,10)))
  return (<>
    <br />
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">

      <h3 className="text-xl font-bold ">Ongoing</h3>
      <Link href={"/createTask"} className="rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg">Add Task</Link>
      </div>
      <TaskCard
        title={"New Task"}
        desc={"No custom list"}
        />
    </section>
    <pre>
      {JSON.stringify(tasks, null, 2)}
    </pre>
        </>
  );
}

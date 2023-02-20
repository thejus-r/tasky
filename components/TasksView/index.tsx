"use client"

import Link from "next/link";
import TaskCard from "./TaskCard";
import { use } from "react";
import { Task } from "@prisma/client";
import useWeekStore from "@/stores/weekStore";

export default function TaskList() { 
  const active = useWeekStore((state)=> state.active)
  const tasks: any=[]
  return (<>
    <br />
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">

      <h3 className="text-xl font-bold ">{active.toISOString()}</h3>
      <Link href={"/createTask"} className="rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg">Add Task</Link>
      </div>
      {JSON.stringify(tasks,null,2)}


      {tasks.length == 0 && <p>No tasks</p>}
      {tasks.length > 0 && tasks.map( (task)=> (
        <TaskCard
        key={task.id}
          title={task.title}
          desc={task.desc}
          />

      ))}
    </section>
        </>
  );
}

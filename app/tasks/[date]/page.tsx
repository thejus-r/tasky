"use client"

import Link from "next/link";
import { use } from "react";
import TaskCard from "./TaskCard";

const defaultValue = {
    date: new Date().toISOString().slice(0,10)
}

async function getTasks(date: string) {
    const res =  await fetch(`http://localhost:3000/api/date/${date}`)
    return await res.json()
}

export default function TaskPage({params}: {params: {date: string}}) {

    const active = new Date(params.date)
    const tasks = use(getTasks(params.date))
    return<>
        <br />
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">

      <h3 className="text-xl font-bold ">{active.toISOString().slice(0,10)}</h3>
      <Link href={"/createTask"} className="rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg">Add Task</Link>
      </div>
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
}

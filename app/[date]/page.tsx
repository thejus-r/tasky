import prisma from "@/lib/prisma";
import Link from "next/link";
import { use } from "react";
import TaskCard from "./TaskCard";

async function getTasks(date: string) {
  const data = await prisma.task.findMany({
    where: {
        date: {
             lte: `${date}T23:59:00.000Z`,
             gte: `${date}T00:00:00.000Z`
        }
    },
    orderBy: {
        createdAt: "desc"
    }
})
    return await data
}

const TaskPage = ({params}: {params: {date: string}}) => {
    
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
      {tasks.length > 0 && tasks.map( (task:any)=> (
        <TaskCard
        key={task.id}
          title={task.title}
          desc={task.desc}
          />

      ))}
    </section>
        </>
}

export default TaskPage
import TasksView from "@/components/TasksView";
import WeekView from "@/components/WeekView";

import prisma from "@/lib/prisma";
import { Task } from "@prisma/client";

async function getData() {
  const res = await prisma.task.findMany();
  return res;
}

export default async function Home() {
  const tasks = await getData();
  return (
    <>
      <WeekView />
      <TasksView/>  
   </>
  );
}

function Card({ title, desc, start, end }: Task) {
  return (
    <>
      <div className="task-card">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <p className="time">
          {start
            .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
            .toLocaleUpperCase()}
          {end &&
            " - " +
              end
                ?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
                .toLocaleUpperCase()}
        </p>
      </div>
    </>
  );
}

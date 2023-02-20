import TasksView from "@/components/TasksView";
import WeekView from "@/components/WeekView";

import { Task } from "@prisma/client";


export default async function Home() {
  return (
    <>
      <WeekView />
      <TasksView/>
    </>
  );
}

function Card({ title, desc, date }: Task) {
  return (
    <>
      <div className="task-card">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </>
  );
}

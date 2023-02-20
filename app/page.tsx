"use client"

import TasksView from "@/components/TasksView";
import WeekView from "@/components/WeekView";
import useWeekStore from "@/stores/weekStore";

import { Task } from "@prisma/client";


export default function Home() {
  return (
    <>
      {/* <TasksView/> */}
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

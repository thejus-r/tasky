"use client";

import WeekView from "@/components/WeekView";

type Task = {
  title: String;
  desc: String;
  time: String;
};

const tasks: Task[] = [
  {
    title: "Daily Stand-up",
    desc: "To discuss with team all work processes for the day.",
    time: "9 AM - 10:30 AM",
  },
  {
    title: "New UI-Kit for the app",
    desc: "To collect all assets that contains a set of design elements such as components.",
    time: "11:20 AM - 12:30 PM",
  },
];

export default function Home() {
  return (
    <>
      <WeekView />
      {tasks.map((task, index) => {
        return <Card key={index} {...task}></Card>;
      })}
    </>
  );
}

interface CardProps {
  title: String;
  desc: String;
  time: String;
}

function Card({ title, desc, time }: CardProps) {
  return (
    <>
      <div className="task-card">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <p className="time">{time}</p>
      </div>
    </>
  );
}

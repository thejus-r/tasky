// imports
import { useQuery } from "react-query";
import supabase from "../../lib/database";
import useWeekStore from "../../app/weekStore";
import TaskList from "./TaskList";

//types
import { Task } from "../../types/task";
import CreateTask from "../CreateTask";
import { useState } from "react";

async function getTasks(date: string) {
  let { data } = await supabase.from("tasks").select().eq("date", date);
  return data;
}

export default function TaskView() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useWeekStore((state) => state.active);
  const query = useQuery({
    queryKey: ["tasks", active.toISOString().slice(0, 10)],
    queryFn: () => getTasks(active.toISOString().slice(0, 10)),
  });

  return (
    <div>
      <div className="p-4 flex justify-between">
        <h2 className="text-3xl font-medium">Tasks</h2>
        <button onClick={() => setIsOpen(true)}>Create Task</button>
        <CreateTask isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {query.isSuccess && <TaskList tasks={query.data as Task[]} />}
    </div>
  );
}

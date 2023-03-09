// imports
import { useQuery } from "react-query";
import supabase from "../../lib/database";
import useWeekStore from "../../app/store";
import TaskList from "./TaskList";

//types
import { Task } from "../../types/task";

async function getTasks(date: string) {
  let { data } = await supabase.from("tasks").select().eq("date", date);
  return data;
}

export default function TaskView() {
  const active = useWeekStore((state) => state.active);
  const query = useQuery({
    queryKey: ["tasks", active.toISOString().slice(0, 10)],
    queryFn: () => getTasks(active.toISOString().slice(0, 10)),
  });

  if (query.isSuccess) {
    return (
      <div>
        <h2 className="text-3xl font-medium">Tasks</h2>
        <TaskList tasks={query.data as Task[]} />
      </div>
    );
  }

  return null;
}

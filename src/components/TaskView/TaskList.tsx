import { Task } from "../../types/task";
import TaskCard from "./TaskCard";

export default function TaskList(props: { tasks: Task[] }) {
  if (props.tasks.length === 0) {
    return (
      <div className="flex gap-1 flex-col h-96 justify-center items-center">
        <h3 className="text-lg font-semibold">Damn! It's looking empty!</h3>
        <p className="text-base text-stone-400">
          If you have a planned task make sure you add the task.
        </p>
      </div>
    );
  }
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard {...task} key={task.id} />
      ))}
    </div>
  );
}

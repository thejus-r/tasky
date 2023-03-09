import { Task } from "../../types/task";
import TaskCard from "./TaskCard";

export default function TaskList(props: { tasks: Task[] }) {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard {...task} key={task.id} />
      ))}
    </div>
  );
}

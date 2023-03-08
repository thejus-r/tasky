import TaskView from "@/components/TaskView";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <TaskView />
      <Link href={"/create"}>Create new task</Link>
    </div>
  );
};

export default HomePage;

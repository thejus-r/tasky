import TaskView from "@/components/TaskView";
import WeekView from "@/components/WeekView";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <WeekView />
      <TaskView />
    </div>
  );
};

export default HomePage;

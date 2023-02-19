import TaskCard from "./TaskCard";

export default function TaskList() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Ongoing</h3>
      <TaskCard
        title={"New Task"}
        desc={"No custom list"}
        fromTime={new Date()}
        toTime={new Date()}
      />
    </section>
  );
}

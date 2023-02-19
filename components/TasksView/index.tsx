import TaskCard from "./TaskCard";

export default function TaskList() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Ongoing</h3>
      <TaskCard />
    </section>
  );
}

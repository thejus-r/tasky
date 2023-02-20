type TaskCardProps = {
  title: String;
  desc: String;
};

export default function TaskCard({
  title,
  desc,
}: TaskCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border-2 border-stone-600/20 bg-stone-800/20 py-2 px-3">
      <h4 className="text-lg font-bold">{title}</h4>
      <div>
        <p className="text-base text-stone-400">{desc}</p>
      </div>
    </div>
  );
}

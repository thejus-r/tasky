type TaskCardProps = {
  title: String;
  desc: String;
  fromTime: Date;
  toTime?: Date;
};

export default function TaskCard({
  title,
  desc,
  fromTime,
  toTime,
}: TaskCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border-2 border-stone-600/20 bg-stone-800/20 py-2 px-3">
      <h4 className="text-lg font-bold">{title}</h4>
      <div>
        <p className="text-base text-stone-400">{desc}</p>
        <p className="text-base font-bold text-stone-400">
          {fromTime
            .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
            .toLocaleUpperCase()}
          {toTime &&
            " - " +
              toTime
                ?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
                .toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
}

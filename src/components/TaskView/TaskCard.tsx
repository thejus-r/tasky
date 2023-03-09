interface TaskCard {
  title: String;
  description: String;
  date: String;
}

export default function TaskCard(props: TaskCard) {
  return (
    <div className="p-4 m-4 bg-stone-800 rounded-lg border-2 border-stone-700">
      <h3 className="text-lg font-medium">{props.title}</h3>
      <p className="text-base text-stone-300">{props.description}</p>
    </div>
  );
}

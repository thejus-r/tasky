interface TaskCard {
  title: String;
  description: String;
  date: String;
}

export default function TaskCard(props: TaskCard) {
  return (
    <div className="p-4 m-2 md:m-4 bg-stone-800 rounded-lg border-2 border-stone-700">
      <h3 className="md:text-lg font-bold md:font-medium">{props.title}</h3>
      <p className="text-sm md:text-base text-stone-300">{props.description}</p>
    </div>
  );
}

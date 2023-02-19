export default function TaskCard() {
  return (
    <div className="flex flex-col gap-2 bg-stone-800/20 py-2 px-3 border-2 rounded-xl border-stone-600/20">
      <h4 className="text-lg font-bold">Heading</h4>
      <div>
        <p className="text-base text-stone-400">Small desc</p>
        <p className="text-base font-bold text-stone-400">10:00 AM - 4 PM</p>
      </div>
    </div>
  );
}

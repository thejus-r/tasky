export default function Header() {
  return (
    <div>
      <nav className="flex justify-between p-4 items-center">
        <div>
          <h1 className="text-xl font-medium">Tasky</h1>
        </div>
        <div>
          <div className="bg-gray-500 w-12 h-12 rounded-full flex justify-center items-center font-semibold">
            RP
          </div>
        </div>
      </nav>
      <div className="bg-stone-800 w-full h-0.5 mb-4"></div>
    </div>
  );
}

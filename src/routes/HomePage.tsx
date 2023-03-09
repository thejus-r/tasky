import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TaskView from "../components/TaskView";
import WeekView from "../components/WeekView";
import { Dialog } from "@headlessui/react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <WeekView />
      <TaskView />
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed bottom-0 flex w-full items-center justify-center">
          <Dialog.Panel className="w-full rounded-t-2xl bg-stone-100 text-stone-900">
            <div className="w-12 rounded-full h-1.5 mt-4 mx-auto bg-stone-800"></div>
            <Dialog.Title className="text-xl font-semibold p-4">
              Create new Task
            </Dialog.Title>

            <form className="p-4">
              <div className="flex flex-col">
                <label htmlFor="title">Give a title</label>
                <input type="text" placeholder="Give a title" />
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

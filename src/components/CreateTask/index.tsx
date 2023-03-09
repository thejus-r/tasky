import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useMutation } from "react-query";
import useWeekStore from "../../app/store";
import supabase from "../../lib/database";

interface CreateTaskProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

type Task = {
  title: string;
  description: string;
  date: string;
};

// Initial value for the form

async function createTask({ title, description, date }: Task) {
  const { error } = await supabase
    .from("tasks")
    .insert({ title, description, date });
  console.log(error);
}

export default function CreateTask({ isOpen, setIsOpen }: CreateTaskProps) {
  const active = useWeekStore((state) => state.active);
  const initialFormState: Task = {
    title: "",
    description: "",
    date: active.toISOString().slice(0, 10),
  };
  const [formState, setFormState] = useState<Task>(initialFormState);

  function handleSubmit() {
    createTask(formState);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <Dialog.Backdrop className="bg-black/50 Z-40 h-full w-full absolute top-0 left-0"></Dialog.Backdrop>
      <div className="fixed bottom-0 md:inset-0 flex w-full items-center justify-center">
        <Dialog.Panel className="w-full md:max-w-xl rounded-t-2xl md:rounded-b-2xl bg-stone-100 text-stone-900">
          <div
            // TODO: Make this drag down to close
            onClick={() => setIsOpen(false)}
            className="md:hidden w-12 rounded-full h-1.5 mt-4 mx-auto bg-stone-800"
          ></div>
          <Dialog.Title className="text-xl font-semibold p-4">
            Create new Task
          </Dialog.Title>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              setFormState(initialFormState);
              setIsOpen(false);
            }}
            className="px-4 flex flex-col gap-4 mb-6"
          >
            <div className="flex flex-col">
              <label htmlFor="title">Give a title</label>
              <input
                value={formState.title}
                onChange={(e) => {
                  let title = e.target.value;
                  let newFormState = { ...formState, title: title };
                  setFormState(newFormState);
                }}
                className="rounded-xl mt-1"
                type="text"
                placeholder="Give a title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Add a description</label>
              <textarea
                value={formState.description}
                onChange={(e) => {
                  let newFormState = {
                    ...formState,
                    description: e.target.value,
                  };
                  setFormState(newFormState);
                }}
                className="rounded-xl mt-1"
                placeholder="What is this task about..."
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date">Select a date:</label>
              <input
                defaultValue={formState.date}
                onChange={(e) => {
                  let newFormState = {
                    ...formState,
                    date: e.target.value,
                  };
                  setFormState(newFormState);
                }}
                className="rounded-xl mt-1"
                type="date"
                placeholder="Give a title"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 py-3 text-white font-medium rounded-xl"
            >
              Create Task
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

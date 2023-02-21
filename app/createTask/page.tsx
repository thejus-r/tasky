"use client";

import useWeekStore from "@/stores/weekStore";
import { useFormik } from "formik";

type Data = {
  title: string;
  desc: string;
  date: Date;
}

async function createTask(data: Data) {
  const res = await fetch(`http://localhost:3000/createTask`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export default function CreateTask() {
  const active = useWeekStore((state) => state.active);
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      date: active.toISOString().slice(0, 10),
    },
    onSubmit: (values) => {
      const data = {
        title: values.title,
        desc: values.desc,
        date: new Date(values.date)
      }
      createTask(data)
    },
  });
  return (
    <>
      <h3 className="text-3xl font-bold">Create New Task</h3>
      {/* <Input/> */}
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <input
            value={formik.values.title}
            required
            placeholder="Enter a title"
            onChange={formik.handleChange}
            className="rounded-md border-2 border-stone-600 bg-stone-900 p-2 placeholder:text-stone-400"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Description</label>
          <input
            value={formik.values.desc}
            placeholder="Enter a description"
            onChange={formik.handleChange}
            className="rounded-md border-2 border-stone-600 bg-stone-900 p-2 placeholder:text-stone-400"
            type="text"
            name="desc"
            id="desc"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Date</label>
          <input
            value={formik.values.date}
            onChange={formik.handleChange}
            className="rounded-md border-2 border-stone-600 bg-stone-900 p-2 placeholder:text-stone-400"
            type="date"
            name="date"
            id="date"
          />
        </div>
        <button
          className="mt-8 rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg"
          type="submit"
        >
          Create Task
        </button>
      </form>
    </>
  );
}

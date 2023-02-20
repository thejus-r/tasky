"use client";

import useWeekStore from "@/stores/weekStore";
import { useFormik } from "formik";

export default function CreateTask() {

  const active = useWeekStore((state)=> state.active)
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      date: active.toISOString().slice(0, 10)
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h3 className="text-3xl font-bold">Create New Task</h3>
      {/* <Input/> */}
      <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Title</label>
            <input value={formik.values.title}  required placeholder='Enter a title' onChange={formik.handleChange} className="bg-stone-900 border-2 placeholder:text-stone-400 p-2 border-stone-600 rounded-md" type="text" name="title" id="title" />
          </div>
          <div  className="flex flex-col">
            <label htmlFor="">Description</label>
            <input value={formik.values.desc} placeholder="Enter a description" onChange={formik.handleChange} className="bg-stone-900 border-2 p-2 border-stone-600 placeholder:text-stone-400 rounded-md" type="text" name="desc" id="desc" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date</label>
            <input value={formik.values.date} onChange={formik.handleChange} className="bg-stone-900 border-2 p-2 border-stone-600 placeholder:text-stone-400 rounded-md" type="date" name="date" id="date" />
          </div>
        <button className="mt-8 rounded-xl border-2 border-stone-800 bg-stone-800/25 px-2.5 py-1.5 font-semibold transition-all duration-500 hover:brightness-125 md:text-lg" type="submit">Create Task</button>
      </form>
    </>
  );
}

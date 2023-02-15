"use client";

import { fmtDateAndTime } from "@/utils/DateUtils";
import { useFormik } from "formik";

export default function CreateTask() {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      startTime: "",
      startDate: "",
      endTime: "",
      endDate: "",
    },
    onSubmit: (values) => {
      const start = fmtDateAndTime(values.startDate, values.startTime);
      const end = fmtDateAndTime(values.endDate, values.endTime);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      Create New Task
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Title"
          />
        </div>
        <div>
          <label htmlFor="desc"> Description: </label>
          <input
            type="text"
            name="desc"
            id="desc"
            onChange={formik.handleChange}
            value={formik.values.desc}
            placeholder="More about the task"
          />
        </div>
        <div>
          <label htmlFor="start"> Starting: </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            placeholder="More about the task"
          />
          <input
            type="time"
            name="startTime"
            id="startTime"
            onChange={formik.handleChange}
            value={formik.values.startTime}
            placeholder="More about the task"
          />
        </div>
        <div>
          <label htmlFor="start"> Ending: </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            placeholder="More about the task"
          />
          <input
            type="time"
            name="endTime"
            id="endTime"
            onChange={formik.handleChange}
            value={formik.values.startTime}
            placeholder="More about the task"
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </>
  );
}

export default function createTask() {
  return (
    <>
      Create New Task
      <form>
        <div>
          <label htmlFor="taskName"> Task Name </label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="enter task name"
          />
        </div>
        <div>
          <label htmlFor="taskDesc"> Task Desc </label>
          <input
            type="text"
            name="taskDesc"
            id="taskDesc"
            placeholder="enter task Desc"
          />
        </div>
        <div>
          <label htmlFor="starting"> Task Name </label>
          <input
            type="date"
            name="taskName"
            id="taskName"
            placeholder="enter task name"
          />
          <input
            type="time"
            name="taskName"
            id="taskName"
            placeholder="enter task name"
          />
        </div>
      </form>
    </>
  );
}

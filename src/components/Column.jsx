import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => {}}>Add</button>
      </div>
      {tasks.map((task)=> (
      <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}

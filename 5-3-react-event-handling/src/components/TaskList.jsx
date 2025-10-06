import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {tasks.length === 0 && <p>No tasks available.</p>}


      {tasks.map((task) => (
        <TaskItem
        Key={task.id}
        id={task.id}
        text={task.text}
        onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

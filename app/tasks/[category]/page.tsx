"use client";

import { Task } from "@/app/types/Task";
import AddTaskForm from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { useActionState, useState } from "react";

const initialTasks: Task[] = [
  {
    taskID: 1,
    name: "Lavar a louça",
    description: "Lavar os pratos, copos e panelas do almoço.",
  },
  {
    taskID: 2,
    name: "Estudar Next.js",
    description: "Terminar a aula do Boot.dev e criar um componente novo.",
  },
  {
    taskID: 3,
    name: "Fazer exercício",
    description: "Treino rápido de 20 minutos em casa.",
  },
  {
    taskID: 4,
    name: "Ler um capítulo",
    description: "Ler pelo menos 10 páginas de qualquer livro.",
  },
];

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function addTask(prevData: Task, formData: FormData) {
    const description = formData.get("description")?.toString();
    if (!description) {
      alert("Por favor insira uma descrição");
      return;
    }
    const name = formData.get("name")?.toString();
    if (!name) {
      alert("Por favor insira uma descrição");
      return;
    }

    const newTask: Task = {
      taskID: tasks.length + 1,
      description: description,
      name: name,
    };

    const tasksCopy: Task[] = [...tasks, newTask];
    return tasksCopy;
  }

  const [state, addAction, isAdding] = useActionState<Task[]>(addTask, tasks);

  return (
    <>
      <AddTaskForm isPending={isAdding} action={addAction} />{" "}
      <div className="flex flex-col gap-5 items-center md:flex-row md:flex-wrap md:justify-center">
        {state.map((task) => (
          <TaskCard key={task.taskID} {...task} />
        ))}
      </div>
    </>
  );
}

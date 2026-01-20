"use client";
import { Task } from "@/app/types/Task";
import AddTaskForm from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { use, useEffect, useState, useTransition } from "react";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Tasks({ params }: Props) {
  const { category } = use(params);
  const keyname = `tasks_${category}`;

  const [isPending, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const localTasksStr = localStorage.getItem(keyname);
    if (localTasksStr) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(JSON.parse(localTasksStr));
    }
    setIsMounted(true);
  }, [keyname]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(keyname, JSON.stringify(tasks));
    }
  }, [tasks, keyname, isMounted]);

  function addTask(formData: FormData) {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    if (!name || !description) {
      alert("Por favor preencha nome e descrição");
      return;
    }
    setTasks((prev) => [...prev, { name, description }]);
  }

  function onTaskDelete(i: number) {
    startTransition(() => {
      setTasks((prev) => {
        const tasksCopy = [...prev];
        tasksCopy.splice(i, 1);
        return tasksCopy;
      });
    });
  }

  // Não renderiza nada até montar no cliente
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddTaskForm
        isPending={isPending}
        action={(formData: FormData) =>
          startTransition(() => addTask(formData))
        }
      />
      <div className="flex flex-col gap-5 items-center md:flex-row md:flex-wrap md:justify-center">
        {tasks.map((task, i) => (
          <TaskCard
            taskID={i + 1}
            onDelete={() => onTaskDelete(i)}
            key={i}
            {...task}
          />
        ))}
      </div>
    </>
  );
}

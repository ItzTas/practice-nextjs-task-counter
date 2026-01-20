"use client";

import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  taskID: number;
  name: string;
  description: string;
  onDelete: (arg0: number) => void;
}

export default function TaskCard({
  taskID,
  name,
  description,
  className,
  onDelete,
  ...props
}: Props) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      {...props}
      className={twMerge(
        clsx(
          completed && "text-green-600",
          "p-3 w-[50%] rounded-md shadow-md outline-2 bg-slate-300 md:w-72",
          className,
        ),
      )}
    >
      <div className="flex relative justify-between">
        <p className="text-xl font-semibold">{taskID}</p>
        <p className="absolute inset-0 m-auto w-max text-xl font-semibold text-center md:text-2xl">
          {name}
        </p>
        <div className="flex gap-1 w-max">
          <button
            onClick={() => onDelete(taskID)}
            className="inline cursor-pointer"
          >
            🗑
          </button>
          <button
            className="inline cursor-pointer"
            onClick={() => setCompleted(!completed)}
          >
            {completed ? "✅" : "❌"}
          </button>
        </div>
      </div>
      <p className="mt-3 text-center md:text-lg">{description}</p>
    </div>
  );
}

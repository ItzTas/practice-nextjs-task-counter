"use client";

import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  taskID: number;
  name: string;
  description: string;
}

export default function TaskCard({
  taskID,
  name,
  description,
  className,
  ...props
}: Props) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      {...props}
      className={twMerge(
        clsx(
          completed && "text-green-600",
          "p-3 w-60 rounded-md shadow-md outline-2 bg-slate-300 md:w-72",
          className,
        ),
      )}
    >
      <div className="flex justify-between">
        <p className="text-xl font-semibold">{taskID}</p>
        <p className="text-xl font-semibold text-center md:text-2xl">{name}</p>
        <p
          className="inline cursor-pointer"
          onClick={() => setCompleted(!completed)}
        >
          {completed ? "✅" : "❌"}
        </p>
      </div>
      <p className="mt-3 text-center md:text-lg">{description}</p>
    </div>
  );
}

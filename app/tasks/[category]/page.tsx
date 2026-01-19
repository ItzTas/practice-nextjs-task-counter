import TaskCard from "@/components/TaskCard";

const tasks = [
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
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.taskID} {...task} />
      ))}
    </div>
  );
}

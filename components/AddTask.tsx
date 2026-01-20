type Props = {
  action: React.FormHTMLAttributes<HTMLFormElement>["action"];
  isPending: boolean;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "action">;

export default function AddTask({ isPending, ...props }: Props) {
  return (
    <form {...props} className="p-4 mx-11 space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Nome da Tarefa
        <input
          name="name"
          type="text"
          placeholder="Digite o nome da tarefa"
          disabled={isPending}
          className="block py-2 px-3 mt-1 w-full placeholder-gray-400 text-gray-900 bg-white rounded-md border border-gray-300 transition sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
        />
      </label>

      <label className="block text-sm font-medium text-gray-700">
        Descrição
        <input
          name="description"
          type="text"
          placeholder="Descrição da tarefa"
          disabled={isPending}
          className="block py-2 px-3 mt-1 w-full placeholder-gray-400 text-gray-900 bg-white rounded-md border border-gray-300 transition sm:text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="py-2 w-full font-semibold text-white bg-indigo-600 rounded-md shadow transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:outline-none"
      >
        Adicionar Tarefa
      </button>
    </form>
  );
}

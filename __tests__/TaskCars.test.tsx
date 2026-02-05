import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "@/components/TaskCard";

describe("TaskCard", () => {
  const mockDelete = jest.fn();

  const renderComponent = () =>
    render(
      <TaskCard
        taskID={1}
        name="Teste Task"
        description="Descrição teste"
        onDelete={mockDelete}
      />,
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza informações básicas", () => {
    renderComponent();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Teste Task")).toBeInTheDocument();
    expect(screen.getByText("Descrição teste")).toBeInTheDocument();
  });

  it("chama onDelete quando clicar no botão 🗑", () => {
    renderComponent();

    fireEvent.click(screen.getByText("🗑"));

    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  it("marca como completo ao clicar no botão", () => {
    renderComponent();

    const toggleBtn = screen.getByText("❌");
    fireEvent.click(toggleBtn);

    expect(screen.getByText("✅")).toBeInTheDocument();
  });
});

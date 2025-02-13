import { useQuery } from "@tanstack/react-query";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { getTodos } from "@/utils/api";
import { useEffect, useState } from "react";
import { TodoType } from "@/types/types";
import { Spinner } from "./Spinner";

export const App = () => {
  const [todos, setTodos] = useState<TodoType[] | undefined>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  if (isError) {
    return (
      <main className="w-full h-[100vh] flex justify-center items-center">
        <h1 className="text-red-700 text-lg flex justify-center">
          Something gone wrong. Plese try later
        </h1>
      </main>
    );
  }
  if (isLoading) {
    return (
      <main className="w-full h-[100vh] flex self-center">
        <Spinner />
      </main>
    );
  }

  const addTodo = (todo: TodoType) => {
    setTodos((prev) => prev && [todo, ...prev]);
  };

  const deleteTodos = (id: number) => {
    const newTodos = todos?.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="w-full flex-col">
        <Header addTodo={addTodo} />
        <main className="flex-col justify-center items-center">
          <TodoList todos={todos} deleteTodos={deleteTodos} />
        </main>
      </div>
    </div>
  );
};

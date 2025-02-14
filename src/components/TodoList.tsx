import { TodoType } from "@/types/types";
import { Todo } from "./Todo";

type Props = {
  todos: TodoType[] | undefined;
  deleteTodos: (id: number) => void;
};

export const TodoList = ({ todos, deleteTodos }: Props) => {
  return (
    <div className=" bg-transparent py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6  grid grid-cols-1 sm:grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {todos?.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodos={deleteTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

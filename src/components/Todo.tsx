import { TodoType } from "@/types/types";
import { CustomButton } from "./CustomButton";
import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "@/utils/api";
import { queryClient } from "@/utils/queryClient";

type Props = {
  todo: TodoType;
  deleteTodos: (id: number) => void;
};

export const Todo = ({ todo, deleteTodos }: Props) => {
  const mutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      deleteTodos(todo.id);
    },
  });

  const onDelete = (id: number) => {
    mutation.mutate(id);
  };

  return (
    <div className="bg-white/5 p-5 flex gap-2 justify-between items-center ">
      <img
        alt="Transistor"
        src="/todo.png"
        width={"10%"}
        height={"10%"}
        className="object-contain items-start"
      />
      <div className="flex justify-start w-full text-xs text-zinc-300">
        {todo.title}
      </div>
      <div className="flex">
        <CustomButton
          text="X"
          type="button"
          color="red"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
};

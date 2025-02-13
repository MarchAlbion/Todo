"use client";
import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";
import { useMutation } from "@tanstack/react-query";
import { postTodo } from "@/utils/api";
import { TodoType } from "@/types/types";
import { queryClient } from "@/utils/queryClient";

import { motion } from 'framer-motion';

type Props = {
  addTodo: (todo: TodoType) => void;
};
export const Header = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const onChange = (newVal: React.ChangeEvent<HTMLInputElement>) => {
    newVal.preventDefault();
    setValue(newVal.target.value);
  };

  const mutation = useMutation({
    mutationFn: (newTodo: TodoType) => postTodo(newTodo),
    onSuccess: (newTodo) => {
      addTodo(newTodo.data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo = {
      completed: false,
      id: Math.random() * 10,
      title: value,
      userId: 2,
    };
    mutation.mutate(newTodo);
    setValue("");
  };

  return (
    <header className="h-52 bg-[url(/forest.jpg)] bg-cover bg-center flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="whitespace-nowrap font-bold  text-center text-2xl px-40 py-6 md:text-3xl md:text-left lg:text-6xl  "
      >
        <h1 className="flex gap-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r  from-orange-700 to-green-500">
            TODO
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-green-500">
            List
          </span>
        </h1>
      </motion.div>

      <form
        className="flex justify-center gap-3 items-center "
        onSubmit={onSubmit}
      >
        <CustomInput
          value={value}
          placeholder="what you need to do?"
          type="text"
          onChange={onChange}
        />
        <div className="flex  self-end">
          <CustomButton type="submit" text="Submit" />
        </div>
      </form>
    </header>
  );
};

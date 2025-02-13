import { TodoType } from "@/types/types";
import axios from "axios";

export const API = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const data = await axios.get(`${API}?_limit=10`);
  return data.data;
};

export const postTodo = async (todo: TodoType) => {
  return await axios.post(API, todo);
};

export const deleteTodo = async (id: number) => {
  return await axios.delete(`${API}/${id}`);
};

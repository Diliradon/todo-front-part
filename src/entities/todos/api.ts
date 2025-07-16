import { client } from '@/shared/lib/axios';
import { Todo } from './api.types';

export const getTodos = () => {
  return client.get<Todo[]>('/todos');
};

export const createTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
  return client.post('/todos', todo);
};

export const updateTodo = (todo: Todo) => {
  return client.put(`/todos/${todo.id}`, todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

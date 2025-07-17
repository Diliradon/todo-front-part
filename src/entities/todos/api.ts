import { client } from '@/shared/lib/axios';
import { Todo } from './api.types';

export const getTodos = () => {
  return client.get<Todo[]>('/tasks');
};

export const createTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
  return client.post('/tasks', todo);
};

export const updateTodo = (todo: Todo) => {
  return client.patch(`/tasks/${todo.id}`, todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/tasks/${id}`);
};

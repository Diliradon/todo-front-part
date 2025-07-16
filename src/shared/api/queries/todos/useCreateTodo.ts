import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo } from '@/entities/todos';
import { Todo } from '@/entities/todos';
import { todosKeys } from './keys';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Omit<Todo, 'id'>) => createTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: todosKeys.all }),
  });
};

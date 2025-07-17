import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateTodo } from '@/entities/todos';
import { Todo } from '@/entities/todos';
import { todosKeys } from './keys';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Todo) => updateTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: todosKeys.all }),
  });
};

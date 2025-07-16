import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteTodo } from '@/entities/todos';
import { todosKeys } from './keys';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: todosKeys.all }),
  });
};

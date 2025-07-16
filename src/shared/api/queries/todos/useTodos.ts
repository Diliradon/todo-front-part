import { useQuery } from '@tanstack/react-query';

import { getTodos } from '@/entities/todos';
import { todosKeys } from './keys';

export const useTodos = () => {
  return useQuery({
    queryKey: todosKeys.all,
    queryFn: getTodos,
  });
};

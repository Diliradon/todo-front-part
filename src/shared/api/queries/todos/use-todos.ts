import { useQuery } from '@tanstack/react-query';

import { getTodos } from '@/entities/todos';
import { todosKeys } from './keys';
import { useSearchParams } from 'react-router-dom';

export const useTodos = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const status = searchParams.get('status') ?? 'all';

  const filter = status === 'all' ? 'all' : status === 'completed' ? 'completed' : 'in-progress';

  return useQuery({
    queryKey: todosKeys.filtered(search, filter),
    queryFn: () => getTodos(search, filter),
  });
};

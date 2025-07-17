import { useTodos } from '@/shared/api/queries/todos';
import { CreateTodo, TodoList } from './ui';
import { Loader2 } from 'lucide-react';

export const TodoPage = () => {
  const { data: todos, isLoading } = useTodos();
  console.log(todos);
  return (
    <section className="flex flex-col max-w-full w-full h-full max-h-screen py-6">
      <div className="flex-shrink-0">
        <CreateTodo />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center flex-1">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        <div className="flex-1 overflow-hidden">
          <TodoList items={todos ?? []} />
        </div>
      )}
    </section>
  );
};

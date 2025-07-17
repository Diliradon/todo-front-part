import { Todo } from '@/entities/todos/api.types';
import { cn } from '@/shared/lib';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Calendar, Edit3 } from 'lucide-react';

interface TodoListProps {
  items: Todo[];
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const isUpdated = (createdAt: string, updatedAt: string): boolean => {
  return new Date(updatedAt).getTime() > new Date(createdAt).getTime();
};

export const TodoList = ({ items }: TodoListProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No todos yet. Create your first todo above!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6 mt-8 flex-shrink-0">Your Todos</h2>
      {/* <div className="flex-1 overflow-y-auto"> */}
      <div className="grid gap-4 pb-4 rounded-xl flex-1 overflow-y-auto max-h-[calc(100dvh-400px)]">
        {items.map((todo) => (
          <Card key={todo.id} className="w-full">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-medium">{todo.title}</CardTitle>
                <span
                  className={cn(
                    `px-3 py-1 rounded-full text-xs font-medium ${
                      todo.completed
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`
                  )}
                >
                  {todo.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {todo.description && <p className="text-muted-foreground">{todo.description}</p>}

              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Created: {formatDate(todo.createdAt)}</span>
                </div>

                {isUpdated(todo.createdAt, todo.updatedAt) && (
                  <div className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4" />
                    <span>Updated: {formatDate(todo.updatedAt)}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

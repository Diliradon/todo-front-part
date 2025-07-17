import { FC, useState } from 'react';

import { cn } from '@/shared/lib';
import { Todo } from '@/entities/todos/api.types';
import { useDeleteTodo, useUpdateTodo } from '@/shared/api/queries/todos';
import { Button, Input, Textarea, Card, CardContent, CardHeader, CardTitle } from '@/shared/ui';
import { Calendar, Check, CircleCheckBig, Edit2, Edit3, Loader2, Trash2, X } from 'lucide-react';

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

export const TodoList: FC<TodoListProps> = ({ items }) => {
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo();
  const { mutate: updateTodo, isPending: isUpdating } = useUpdateTodo();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editDescription, setEditDescription] = useState<string>('');

  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  const handleUpdate = (todo: Todo) => {
    updateTodo({
      ...todo,
      title: editTitle,
      description: editDescription,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleComplete = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() });
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No todos yet. Create your first todo above!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 pb-4 rounded-xl flex-1 overflow-y-auto max-h-[calc(100dvh-400px)] hide-scrollbar last:mb-6">
      {items.map((todo) => {
        const isEditing = editingId === todo.id;
        return (
          <Card key={todo.id} className="w-full">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                {isEditing ? (
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="text-lg font-medium"
                  />
                ) : (
                  <CardTitle className="text-lg font-medium">{todo.title}</CardTitle>
                )}

                {isEditing ? (
                  <div className="flex justify-end gap-1 mx-1 my-0.5">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900 dark:hover:text-green-400"
                      onClick={() => {
                        handleUpdate(todo);
                        setEditingId(null);
                      }}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <Loader2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Check className="h-4 w-4 text-green-500" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400"
                      onClick={() => setEditingId(null)}
                      disabled={isUpdating}
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ) : (
                  <span
                    className={cn(
                      `px-3 py-1 rounded-full text-xs font-medium ${
                        todo.completed
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`
                    )}
                  >
                    {todo.completed ? 'Completed' : 'In progress'}
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              {isEditing ? (
                <Textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="text-muted-foreground max-h-40"
                />
              ) : (
                todo.description && <p className="text-muted-foreground">{todo.description}</p>
              )}

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

              <div className="flex justify-end !mt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    handleComplete(todo);
                  }}
                  disabled={isDeleting || isUpdating}
                  className={cn(
                    'h-8 w-8 p-0',
                    todo.completed
                      ? 'hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900 dark:hover:text-green-400'
                      : 'hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-900 dark:hover:text-gray-400'
                  )}
                >
                  {isUpdating ? (
                    <Loader2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <CircleCheckBig
                      className={cn('h-5 w-5', todo.completed ? 'text-green-500' : 'text-gray-500')}
                    />
                  )}
                </Button>
                {!isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditTitle(todo.title);
                      setEditDescription(todo.description || '');
                    }}
                    disabled={isDeleting}
                    className="h-8 w-8 p-0 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900 dark:hover:text-orange-400"
                  >
                    {isUpdating ? (
                      <Loader2 className="h-4 w-4 text-orange-500" />
                    ) : (
                      <Edit2 className="h-4 w-4 text-orange-500" />
                    )}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(todo.id)}
                  disabled={isDeleting}
                  className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400"
                >
                  {isDeleting ? (
                    <Loader2 className="h-4 w-4 text-red-500" />
                  ) : (
                    <Trash2 className="h-4 w-4 text-red-500" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

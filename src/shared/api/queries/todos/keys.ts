export const todosKeys = {
  all: ['todos'] as const,
  filtered: (search?: string, status?: string) =>
    [...todosKeys.all, search ?? '', status ?? ''] as const,
};

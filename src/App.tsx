import { TanStackQueryProvider } from "./shared/providers";
import { TodoPage } from "./pages/todo-page";

export const App = () => {
  return (
    <TanStackQueryProvider>
      <main className='container mx-auto p-4 max-w-md'>
        <TodoPage />
      </main>
    </TanStackQueryProvider>
  );
};

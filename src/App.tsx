import { TanStackQueryProvider } from "./shared/providers";

export const App = () => {

  return (
    <div className='container mx-auto p-4 max-w-md'>
      <TanStackQueryProvider>
        <div className="mb-10">
          <h1>Todo App</h1>
        </div>
      </TanStackQueryProvider>
    </div>
  );
}

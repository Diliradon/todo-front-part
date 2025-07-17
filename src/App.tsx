import { HashRouter } from 'react-router-dom';

import { TanStackQueryProvider } from './shared/providers';
import { TodoPage } from './pages/todo-page';
import { DarkVeil } from './shared/ui';

export const App = () => {
  return (
    <HashRouter>
      <TanStackQueryProvider>
        <main
          style={{ width: '100%', height: '100dvh', position: 'relative' }}
          className="px-4"
        >
          {/* Background layer */}
          <div className="absolute inset-0 z-0">
            <DarkVeil hueShift={220} />
          </div>
          
          {/* Content layer */}
          <div className="relative z-10">
            <TodoPage />
          </div>
        </main>
      </TanStackQueryProvider>
    </HashRouter>
  );
};

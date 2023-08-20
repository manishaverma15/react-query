import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DataFetcher from './components/DataFetcher';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Example</h1>
        <DataFetcher />
      </div>
    </QueryClientProvider>
  );
};

export default App;

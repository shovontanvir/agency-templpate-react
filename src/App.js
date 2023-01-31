import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import About from './Pages/AboutUs/About';
import Distribution from './Pages/Distribution/Distribution';
import HomePage from './Pages/Home/HomePage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <HomePage />
        <About />
        <Distribution />
      </>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

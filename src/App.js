import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Brands from './components/homePage/Brands';
import HomeHeader from './components/homePage/HomeHeader';
import PartnerWithUs from './components/homePage/PartnerWithUs';
import Services from './components/homePage/Services';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <>
      <HomeHeader />
      <Services />
      <Brands />
      <PartnerWithUs />
      </>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

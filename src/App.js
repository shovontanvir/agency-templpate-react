import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { menuItems } from './Router/paths';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      
      <Router>
          <Navbar />

          <Routes>
                {
                  menuItems.map((item, index) => (
                    (item.element && item.path && !item.childMenu) && <Route path={item.path} element={item.element} key={index.toString()} />
                  ))
                }
                {
                  menuItems.map((item) => (
                    item.childMenu ? item.childMenu.map((cItems, index) => (
                      <Route path={cItems.path} element={cItems.element} key={index.toString()} />
                    )): null
                  ))
                }
          </Routes>
          <Footer />
        </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

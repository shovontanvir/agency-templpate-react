import About from "../Pages/AboutUs/About";
import Career from "../Pages/Career/Career";
import Distribution from "../Pages/Distribution/Distribution";
import HomePage from "../Pages/Home/HomePage";
import Products from "../Pages/Products/Products";

export const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    name: "About Us",
    path: "/about-us",
    element: <About />,
  },
  {
    id: 3,
    name: "Distribution",
    path: "/distribution",
    element: <Distribution />,
  },
  {
    id: 4,
    name: "Career",
    path: "/career",
    element: <Career />,
  },
  {
    id: 5,
    name: "Products",
    childMenu: [
      {
        id: "dell",
        name: "Dell",
        path: "products/dell",
        element: <Products url="products/dell" />,
      },
      {
        id: "avita",
        name: "Avita",
        path: "products/avita",
        element: <Products url="products/avita" />,
      },
      {
        id: "hp",
        name: "HP",
        path: "products/hp",
        element: <Products url="products/hp" />,
      },
      {
        id: "oracle",
        name: "Oracle",
        path: "products/oracle",
        element: <Products url="products/oracle" />,
      },
    ],
  },
  {
    id: 6,
    name: "Current Affairs",
    path: "/current-affairs",
    // element: <CurrentAffairs />,
  },
];

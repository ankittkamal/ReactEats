import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./store";
import Cart from "./components/cart/Cart";

function AppLayout() {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col items-center h-screen justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

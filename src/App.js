import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

function AppLayout() {
  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <Header />
      <Body />;
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

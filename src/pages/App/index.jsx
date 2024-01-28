import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import NavBar from "../../Components/NavBar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import "./App.css";

const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/All", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sing-in", element: <SingIn /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRouter />
          <NavBar />
          <CheckOutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
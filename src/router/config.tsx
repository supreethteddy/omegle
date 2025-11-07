
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Splash from "../pages/splash/page";
import Login from "../pages/login/page";
import ModeSelect from "../pages/mode-select/page";
import Filters from "../pages/filters/page";
import Matching from "../pages/matching/page";
import Chat from "../pages/chat/page";
import PostChat from "../pages/post-chat/page";
import CoinStore from "../pages/coin-store/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mode-select",
    element: <ModeSelect />,
  },
  {
    path: "/filters",
    element: <Filters />,
  },
  {
    path: "/matching",
    element: <Matching />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/post-chat",
    element: <PostChat />,
  },
  {
    path: "/coin-store",
    element: <CoinStore />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

import Home from "pages/Home";
import Error404 from "pages/Error404";

export const routes: route[] = [
  { path: "/", component: Home },
  { path: "*", component: Error404 },
];

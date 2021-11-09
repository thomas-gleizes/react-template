import { menu as menuType, route } from "./types";

import Home from "../pages/Home";

export const routes: Array<route> = [{ path: "/", exact: true, component: Home }];

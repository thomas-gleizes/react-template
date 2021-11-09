import React from "react";
import { RouteComponentProps } from "react-router";

export interface menu {
  libelle: string;
  href: string;
}

export interface route {
  path: string;
  exact: true;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

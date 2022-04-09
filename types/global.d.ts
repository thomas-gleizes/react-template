declare type Component<P = {}> = React.FunctionComponent<P>

declare type route = {
  path: string;
  component: Component;
};

declare type routes = {
  [key: string]: route;
};

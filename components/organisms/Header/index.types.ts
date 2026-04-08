export default interface HeaderProps {}

export interface Route {
  href: string;
  text: string;
  active: boolean;
  external?: boolean;
}

export interface NavProps {
  routes: Route[];
}

export interface ISubLink {
  title: string;
  link: string;
}

export interface INavbarItem {
  logo?: string;
  title?: string;
  link: string;
  icon?: string;
  subLinks?: ISubLink[];
  isButton?: boolean;
}

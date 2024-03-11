type NavCategory = {
  title: string;
  href: string;
};

type NavLink = {
  title: string;
  href: string;
  category?: {
    [key: string]: NavCategory;
  };
};

export type ContentNavbarProps = {
  links: NavLink[];
};

declare namespace NavBarScssNamespace {
  export interface INavBarScss {
    logo: string;
    'nav-bar': string;
    'nav-bar-wrapper': string;
    'search-input': string;
  }
}

declare const NavBarScssModule: NavBarScssNamespace.INavBarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavBarScssNamespace.INavBarScss;
};

export = NavBarScssModule;

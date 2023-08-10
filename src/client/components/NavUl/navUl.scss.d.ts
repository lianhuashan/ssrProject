declare namespace NavUlScssNamespace {
  export interface INavUlScss {
    link: string;
  }
}

declare const NavUlScssModule: NavUlScssNamespace.INavUlScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavUlScssNamespace.INavUlScss;
};

export = NavUlScssModule;

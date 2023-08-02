declare namespace HomeNavBarScssNamespace {
  export interface IHomeNavBarScss {
    'flex-col-box': string;
    'flex-row-box': string;
    link: string;
    logo: string;
    'search-icon-left': string;
    'search-icon-right': string;
    'search-input': string;
    'search-wrapper': string;
    'small-text': string;
    'text-ellipsis': string;
    'text-gray': string;
    'text-multi-line-ellipsis': string;
    'text-sub-title': string;
    'text-title': string;
    wrapper: string;
  }
}

declare const HomeNavBarScssModule: HomeNavBarScssNamespace.IHomeNavBarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeNavBarScssNamespace.IHomeNavBarScss;
};

export = HomeNavBarScssModule;

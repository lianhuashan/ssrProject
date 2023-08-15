declare namespace HomeNavBarScssNamespace {
  export interface IHomeNavBarScss {
    'close-btn': string;
    link: string;
    logo: string;
    qrcode: string;
    'qrcode-outer': string;
    'qrcode-status-text': string;
    'qrcode-wrapper': string;
    'search-icon-left': string;
    'search-icon-right': string;
    'search-input': string;
    'search-wrapper': string;
    wrapper: string;
  }
}

declare const HomeNavBarScssModule: HomeNavBarScssNamespace.IHomeNavBarScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeNavBarScssNamespace.IHomeNavBarScss;
};

export = HomeNavBarScssModule;

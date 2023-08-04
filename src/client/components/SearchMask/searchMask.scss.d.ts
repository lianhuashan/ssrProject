declare namespace SearchMaskScssNamespace {
  export interface ISearchMaskScss {
    header: string;
    'search-icon-left': string;
    'search-icon-right': string;
    'search-input': string;
    'search-page': string;
    'search-wrapper': string;
  }
}

declare const SearchMaskScssModule: SearchMaskScssNamespace.ISearchMaskScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchMaskScssNamespace.ISearchMaskScss;
};

export = SearchMaskScssModule;

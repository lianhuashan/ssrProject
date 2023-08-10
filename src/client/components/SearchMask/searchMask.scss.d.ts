declare namespace SearchMaskScssNamespace {
  export interface ISearchMaskScss {
    'close-btn': string;
    header: string;
    'result-author-item': string;
    'result-author-item-left': string;
    'result-author-wrapper': string;
    'result-book-item': string;
    'result-book-item-left': string;
    'result-book-wrapper': string;
    'result-category-item': string;
    'result-category-item-left': string;
    'result-category-wrapper': string;
    'result-icon-more': string;
    'result-item': string;
    'result-item-left': string;
    'result-item-right': string;
    'result-splitor-dot': string;
    'result-text-author': string;
    'result-text-info': string;
    'result-text-title': string;
    'search-icon-left': string;
    'search-icon-right': string;
    'search-input': string;
    'search-input-dropdown': string;
    'search-input-dropdown-item': string;
    'search-input-dropdown-item-shot': string;
    'search-page': string;
    'search-wrapper': string;
  }
}

declare const SearchMaskScssModule: SearchMaskScssNamespace.ISearchMaskScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchMaskScssNamespace.ISearchMaskScss;
};

export = SearchMaskScssModule;

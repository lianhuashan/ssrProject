declare namespace HomeScssNamespace {
  export interface IHomeScss {
    'category-container': string;
    'category-detail-head': string;
    'category-detail-item': string;
    'category-detail-items-container': string;
    'flex-col-box': string;
    'flex-row-box': string;
    'small-text': string;
    'text-ellipsis': string;
    'text-gray': string;
    'text-multi-line-ellipsis': string;
    'text-sub-title': string;
    'text-title': string;
    'top-book-container': string;
    'top-book-item': string;
    'top-book-item-cover': string;
    'top-book-item-intro': string;
    'top-book-item-order': string;
    'top-category-container': string;
    'top-category-head-desp': string;
    'top-category-head-title': string;
    'top-category-item': string;
    'top-category-show-all': string;
  }
}

declare const HomeScssModule: HomeScssNamespace.IHomeScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeScssNamespace.IHomeScss;
};

export = HomeScssModule;

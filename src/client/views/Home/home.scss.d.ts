declare namespace HomeScssNamespace {
  export interface IHomeScss {
    'book-cover': string;
    'book-cover-img': string;
    'book-cover-intro': string;
    'book-cover-list': string;
    'book-cover-order': string;
    category: string;
    'category-block': string;
    'category-list': string;
    'category-list-item': string;
    'category-title-desp': string;
    'category-title-img': string;
    'top-category': string;
    wrapper: string;
  }
}

declare const HomeScssModule: HomeScssNamespace.IHomeScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeScssNamespace.IHomeScss;
};

export = HomeScssModule;

declare namespace CategoryScssNamespace {
  export interface ICategoryScss {
    'category-book-item': string;
    'category-book-item-intro': string;
    'category-book-item-intro-title': string;
    'category-content': string;
    'category-left-menu': string;
    'category-left-menu-item': string;
    'category-left-menu-item-active': string;
    'category-right-head': string;
    'category-wrapper': string;
  }
}

declare const CategoryScssModule: CategoryScssNamespace.ICategoryScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CategoryScssNamespace.ICategoryScss;
};

export = CategoryScssModule;

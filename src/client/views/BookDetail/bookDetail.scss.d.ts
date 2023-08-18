declare namespace BookDetailScssNamespace {
  export interface IBookDetailScss {
    bar: string;
    'book-comment': string;
    'book-comment-item': string;
    'book-comment-item-author': string;
    'book-comment-item-author-avatar': string;
    'book-intro': string;
    'book-intro-action-btn': string;
    'book-intro-action-btn-wrapper': string;
    'book-intro-author': string;
    'book-intro-category': string;
    'book-intro-head': string;
    'book-intro-left': string;
    'book-intro-text': string;
    'book-intro-title': string;
    'book-review': string;
    'book-review-action-btn': string;
    'book-review-action-wrapper': string;
    'book-review-bar': string;
    'book-review-category': string;
    'book-review-content': string;
    'book-review-title': string;
    'content-wrapper': string;
    'detail-wrapper': string;
  }
}

declare const BookDetailScssModule: BookDetailScssNamespace.IBookDetailScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BookDetailScssNamespace.IBookDetailScss;
};

export = BookDetailScssModule;

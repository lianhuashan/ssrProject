declare namespace BaseScssNamespace {
  export interface IBaseScss {
    'flex-col-box': string;
    'flex-row-box': string;
    'small-text': string;
    'text-ellipsis': string;
    'text-gray': string;
    'text-multi-line-ellipsis': string;
    'text-sub-title': string;
    'text-title': string;
  }
}

declare const BaseScssModule: BaseScssNamespace.IBaseScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BaseScssNamespace.IBaseScss;
};

export = BaseScssModule;

declare namespace MaskScssNamespace {
  export interface IMaskScss {
    mask: string;
    'mask-non-transparent': string;
  }
}

declare const MaskScssModule: MaskScssNamespace.IMaskScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MaskScssNamespace.IMaskScss;
};

export = MaskScssModule;

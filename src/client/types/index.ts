export interface ResType<T> {
  data: T;
  state: number;
  type: 'success' | 'fail' | 'error';
}

export interface Category {
  covers?: string[];
  bookTitles?: string[];
  CategoryId?: string;
  rank?: number;
  type?: number;
  categoryType?: number;
  parentCategoryId?: string;
  parentCategoryTitle?: string;
  title?: string;
  recommend?: string;
  totalCount?: number;
  showAll?: number;
  authorType?: number;
  uiType?: number;
  showIcon?: number;
  sublist?: Category[];
  lectureBooks?: LectureBook[];
  ranklistCover?: RankListCover;
}

export interface RankListCover {
  tinycode?: string;
  chart_title?: string;
  chart_detail_title?: string;
  chart_detail_title_dark?: string;
  chart_share_title?: string;
  chart_share_logo?: string;
  chart_book_detial_icon?: string;
  chart_tag?: string;
  eink_chart_title?: string;
  chart_title_main?: string;
  chart_detail_title_main?: string;
  chart_detail_title_dark_main?: string;
  chart_background_color_1?: string;
  chart_background_color_2?: string;
  chart_title_height?: number;
  chart_title_width?: number;
  desc?: string;
}

export interface LectureBook {
  bookInfo?: BookInfo;
  ratingCount?: number;
  star?: number;
  searchIdx?: number;
  readingCount?: number;
  riseCount?: number;
  bestMark?: string;
}

export interface BookInfo {
  bookId: string;
  title: string;
  author: string;
  cover: string;
  version: number;
  format: string;
  type: number;
  price: number;
  originalPrice: number;
  soldout: number;
  bookStatus: number;
  payType: number;
  intro: string;
  centPrice: number;
  finished: number;
  maxFreeChapter: number;
  free: number;
  mcardDiscount: number;
  ispub: number;
  extra_type: number;
  cpid: number;
  publishTime: string;
  category: string;
  categories: string;
  hasLecture: string;
  lastChapterIdx: string;
  paperBook: string;
  blockSaveImg: string;
  language: string;
  newRating: string;
  newRatingCount: string;
  newRatingDetail: string;
}

export interface IndexCategory {
  categories?: Category[];
  maleCategories?: Category[];
  femaleCategories?: Category[];
  otherCategories?: Category[];
  topCategories?: Category[];
  otherTopCategories?: Category[];
  allUnsupportSublistCategories?: Category[];
  recommendBooks?: any;
  isFetchRecommendBooks?: Boolean;
  bookInShelfData?: any;
}

interface BookDetail {
  book_info?: BookBrief;
  review_info?: ReviewInfo;
  comment_info?: BookComments[];
  mark_info?: BookMarks[];
  reader_info?: ReaderInfo;
}
interface ReviewInfo {
  book_id?: string;
  category?: CategoryBrief[];
  recommond_info?: {
    total?: number;
    support?: number;
    fine?: number;
    bad?: number;
    platform_point?: string;
  };
}

interface BookBrief {
  book_id?: string;
  cover?: string;
  title?: string;
  author?: string;
  brief?: string;
  category?: CategoryBrief[];
}

interface BookComments {
  book_id?: string;
  author?: {
    nick_name?: string;
    avatar?: string;
  };
  reviewType: ReviewType;
  detail: string;
}
interface BookMarks {
  book_id?: string;
  text?: string;
  authors: string[];
}

interface CategoryBrief {
  category_id?: string;
  category_name?: string;
  total_count?: number;
  cover?: {
    small_pic?: string;
    big_pic?: string;
    eink_chart_title?: string;
  };
}
interface ReaderInfo {
  today?: number;
}

type ReviewType = 'support' | 'fine' | 'bad';

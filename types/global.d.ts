interface ResType<T> {
  data: T;
  state: number;
  type: 'success' | 'fail' | 'error';
}

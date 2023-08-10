export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
//防抖，暴击场景下，延迟执行方法，直到最后一次点击
export const debounce = function (fn: (...rest: any) => void, delay: number = 1000) {
  let timer: any;
  const callback = fn;

  function debounced() {
    const args = Array.prototype.slice.apply(arguments);
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }
  return debounced;
};
//节流 滚动等场景下，连续触发，强制每隔N秒执行一次
export const throttle = function (fn: (...rest) => void, gap: number = 1000, isFirstHandle: boolean = false) {
  let lastTime: number;
  let timer: number;
  function throttled() {
    const args = Array.prototype.slice.apply(arguments);
    const context = this;
    if (!lastTime && !timer && isFirstHandle) {
      fn.apply(context, args);
      lastTime = Date.now();
      isFirstHandle = false;
      return;
    }

    if (lastTime + gap > Date.now()) {
      clearTimeout(timer);
      timer = setTimeout(
        () => {
          lastTime = Date.now();
          fn.apply(context, args);
        },
        lastTime + gap - Date.now()
      );
    } else {
      clearTimeout(timer);
      fn.apply(context, args);
      lastTime = Date.now();
    }
  }
  return throttled;
};

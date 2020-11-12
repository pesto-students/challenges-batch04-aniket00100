function throttle(fn, timeInMs) {
  let timeout;
  let lastExecutedAt;
  return function (...args) {
    const context = this;
    if (!lastExecutedAt) {
      fn.apply(this, args);
      lastExecutedAt = Date.now();
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (Date.now() - lastExecutedAt >= timeInMs) {
          fn.apply(context, args);
          lastExecutedAt = Date.now();
        }
      }, timeInMs - (Date.now() - lastExecutedAt));
    }
  };
}

export { throttle };

export const baseHandlers: ProxyHandler<any> = {
  get(target, key) {
    if (!key) {
      return;
    }
    const result = target[key];
    return result;
  },
  set(target, key, value) {
    return true;
  },
};

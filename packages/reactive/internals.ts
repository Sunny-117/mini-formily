import { baseHandlers } from "./handlers";

export const createObservable = (target: any) => {
  return new Proxy(target, baseHandlers);
};

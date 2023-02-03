import { baseHandlers } from "./handlers";

export const createObservable = (target: any) => {
  return baseHandlers(target);
};

import { createObservable } from "./internals";

export function observable<T extends object>(target: T): T {
  return createObservable(target);
}

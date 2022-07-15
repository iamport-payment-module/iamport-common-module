export function curry(this: any, func: any) {
  const curried = (...args: any[]) => {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...args2: any[]) => {
        return curried.apply(this, args.concat(args2));
      };
    }
  };

  return curried;
}

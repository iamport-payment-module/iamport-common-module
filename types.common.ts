export type AnyFunction = (...args: any[]) => any;

export type LogStructure = {
  [userId: string]: {
    [URLTimestamp: `${string}:${string}`]: {
      parameters: { [P in string]: any };
      functions: {
        [Function: string]: {
          parameters: { [P in string]: any };
          timestamp: Date;
          elapsedTime: number;
          error: {
            callstack: string;
            message: string;
          } | null;
        };
      };
      elapsedTime: number;
      pid: number;
      vmName: string;
    };
  };
};

export type FunctorValue<T> = {
  value: T;
  log: null | LogStructure;
  error: null | string;
};

export type MonadFunc<A = unknown, T = unknown> = (arg: Monad<A>) => Monad<T>;

type MergeFunction<T extends AnyFunction, P extends AnyFunction> = T extends (
  ...args: infer A
) => any
  ? (...args: A) => P
  : never;

export type Curry<T extends AnyFunction> = T extends (
  ...args: infer Arguments
) => infer ReturnValue
  ? Arguments extends [infer FirstArgument, ...infer RestArguments]
    ? RestArguments extends []
      ? (arg: FirstArgument) => ReturnValue
      : MergeFunction<
          (arg: FirstArgument) => ReturnValue,
          Curry<(...args: RestArguments) => ReturnValue>
        >
    : never
  : never;

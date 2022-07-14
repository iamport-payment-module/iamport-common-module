import { functionTypeParam } from '@babel/types';
import { AnyFunction } from '../types';

curry(prepare)(IOHandler, preaperArgs)

function toIOFunction(curriedFn) {
    return (functor) => {curriedFn(functor)}
}

export interface Domain {
  C: {
    generateMerchantUID: () => string;
    calculateAmount: (plan_tier, plan_month) => number;
  };
  G: {
    prepare: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any },
      functor:any
    ) => void;
    handleClientFailure: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => void;
    getPreparedAmount: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => boolean;
    handleForgery: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => void;
    getPaidStatus: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => boolean;
    finishPayment: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => void;
    updateMembership: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
    ) => void;
    getVirtualAccount: (
      IOHandler: { [K in string]: AnyFunction },
      perparArgs: { [K in string]: any }
      functor:any
    ) => functor;
  };
}

compose(...)(Either.of({params:[...], log: }))

(functor) => {return functor.isLeft ? functor : }
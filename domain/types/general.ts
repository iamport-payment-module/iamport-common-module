import { AnyFunction, FunctorValue as FV } from '../../types.common';
import { AsyncEither } from '../../functors/AsyncEither';

export type General = {
  // generic타입은 결과가 Right일 경우로 상정
  // Left일경우 무시되어야 함
  prepare(v:AsyncEither<void>): AsyncEither<void>;
  handleClientFailure(v:AsyncEither<void>): AsyncEither<void>;
  getPreparedAmount(v:AsyncEither<number>): AsyncEither<number>;
  getVirtualAccount(v:AsyncEither<void>): AsyncEither<void>;
  prepareVirtualAccountDeposit(): AsyncEither<void>;
  sendEmail(v:AsyncEither<void>): AsyncEither<void>;
  updateMembership(v:AsyncEither<void>): AsyncEither<void>;
  finishPayment(v:AsyncEither<void>): AsyncEither<void>;
};
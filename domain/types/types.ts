import { AnyFunction } from '../../types.common';
import { AsyncEither } from '../../functors';
export type Common = {
  generateMerchantUID(): string;
  getAmount(): number;
};

export type General = {
  // generic타입은 결과가 Right일 경우로 상정
  // Left일경우 무시되어야 함
  prepare(): AsyncEither<void>;
  handleClientFailure(): AsyncEither<void>;
  getPreparedAmount(): AsyncEither<number>;
  getVirtualAccount(): AsyncEither<void>;
  prepareVirtualAccountDeposit(): AsyncEither<void>;
  sendEmail(): AsyncEither<void>;
  updateMembership(): AsyncEither<void>;
  finishPayment(): AsyncEither<void>;
};

export type Regular = {};

export type Refund = {};

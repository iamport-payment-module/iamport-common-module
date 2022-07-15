import { generateMerchantUID, getAmount } from './functions/common';
import { prepare } from './functions/general';

describe('Domain Unit Test', () => {
  describe('common functions', () => {
    it('should return UUID when generateMerchantUID called', () => {
      const merchant_uid = generateMerchantUID();

      expect(typeof merchant_uid).toBe('string');
      expect(merchant_uid.length).toBe(16);
    });

    it('should return amount to be paid by plan', () => {
      const premeium_3month_amount = getAmount();
      const basic_1month_amount = getAmount();
    });
  });

  describe('general functions', () => {
    it('should return void when succeeded', () => {
      prepare();
    });
  });
});

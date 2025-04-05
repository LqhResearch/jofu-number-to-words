import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';
import { NumberToWordsConfig } from '../src/interfaces/config';

describe('numberToWords - Decimal and Fractional Prefix Config', () => {
    test('should use default "phẩy" and "linh"', () => {
        expect(numberToWords(1.5)).toBe('một phẩy năm');
        expect(numberToWords(10.02)).toBe('mười phẩy không hai');
    });

    test('should allow custom decimal separator', () => {
        const config: NumberToWordsConfig = { decimalSeparator: 'chấm' };

        expect(numberToWords(1.5, config)).toBe('một chấm năm');
        expect(numberToWords(10.02, config)).toBe('mười chấm không hai');
    });

    test('should convert three-digit numbers', () => {
        const config: NumberToWordsConfig = { fractionalPrefix: 'lẻ' };

        expect(numberToWords(100, config)).toBe('một trăm');
        expect(numberToWords(105, config)).toBe('một trăm lẻ năm');
        expect(numberToWords(210, config)).toBe('hai trăm mười');
        expect(numberToWords(999, config)).toBe('chín trăm chín mươi chín');
    });
});

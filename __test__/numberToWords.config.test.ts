import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';

describe('numberToWords - Decimal and Fractional Prefix Config', () => {
    test('should use default "phẩy" and "linh"', () => {
        expect(numberToWords(1.5)).toBe('một phẩy năm');
        expect(numberToWords(10.02)).toBe('mười phẩy không hai');
    });

    test('should allow custom decimal separator', () => {
        expect(numberToWords(1.5, { decimalSeparator: 'chấm' })).toBe('một chấm năm');
        expect(numberToWords(10.02, { decimalSeparator: 'chấm' })).toBe('mười chấm không hai');
    });

    test('should convert three-digit numbers', () => {
        expect(numberToWords(100, { fractionalPrefix: 'lẻ' })).toBe('một trăm');
        expect(numberToWords(105, { fractionalPrefix: 'lẻ' })).toBe('một trăm lẻ năm');
        expect(numberToWords(210, { fractionalPrefix: 'lẻ' })).toBe('hai trăm mười');
        expect(numberToWords(999, { fractionalPrefix: 'lẻ' })).toBe('chín trăm chín mươi chín');
    });
});

import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { VietnameseConfig } from '../../src/interfaces/config';

describe('toWords.vi - Decimal and Fractional Prefix Config', () => {
    test('should use default "phẩy" and "linh"', () => {
        expect(toWords.vi(1.5)).toBe('một phẩy năm');
        expect(toWords.vi(10.02)).toBe('mười phẩy không hai');
    });

    test('should allow custom decimal separator', () => {
        const config: VietnameseConfig = { decimalSeparator: 'chấm' };

        expect(toWords.vi(1.5, config)).toBe('một chấm năm');
        expect(toWords.vi(10.02, config)).toBe('mười chấm không hai');
    });

    test('should convert three-digit numbers', () => {
        const config: VietnameseConfig = { fractionalPrefix: 'lẻ' };

        expect(toWords.vi(100, config)).toBe('một trăm');
        expect(toWords.vi(105, config)).toBe('một trăm lẻ năm');
        expect(toWords.vi(210, config)).toBe('hai trăm mười');
        expect(toWords.vi(999, config)).toBe('chín trăm chín mươi chín');
    });
});

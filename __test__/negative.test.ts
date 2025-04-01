import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';

describe('numberToWords - Negative Numbers', () => {
    test('should convert negative single-digit numbers', () => {
        expect(numberToWords(-1)).toBe('âm một');
        expect(numberToWords(-5)).toBe('âm năm');
        expect(numberToWords(-9)).toBe('âm chín');
    });

    test('should convert negative two-digit numbers', () => {
        expect(numberToWords(-10)).toBe('âm mười');
        expect(numberToWords(-15)).toBe('âm mười lăm');
        expect(numberToWords(-75)).toBe('âm bảy mươi lăm');
        expect(numberToWords(-21)).toBe('âm hai mươi mốt');
        expect(numberToWords(-99)).toBe('âm chín mươi chín');
    });

    test('should convert negative three-digit numbers', () => {
        expect(numberToWords(-100)).toBe('âm một trăm');
        expect(numberToWords(-105)).toBe('âm một trăm linh năm');
        expect(numberToWords(-210)).toBe('âm hai trăm mười');
        expect(numberToWords(-999)).toBe('âm chín trăm chín mươi chín');
    });

    test('should convert negative four-digit numbers', () => {
        expect(numberToWords(-1000)).toBe('âm một nghìn');
        expect(numberToWords(-1005)).toBe('âm một nghìn không trăm linh năm');
        expect(numberToWords(-1010)).toBe('âm một nghìn không trăm mười');
        expect(numberToWords(-1234)).toBe('âm một nghìn hai trăm ba mươi bốn');
        expect(numberToWords(-9999)).toBe('âm chín nghìn chín trăm chín mươi chín');
    });

    test('should convert large negative numbers', () => {
        expect(numberToWords(-1000000)).toBe('âm một triệu');
        expect(numberToWords(-500000000)).toBe('âm năm trăm triệu');
        expect(numberToWords(-1000000000)).toBe('âm một tỷ');
        expect(numberToWords(-1234567890)).toBe(
            'âm một tỷ hai trăm ba mươi bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi',
        );
    });
});

import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';

describe('numberToWords', () => {
    test('should convert single-digit numbers', () => {
        expect(numberToWords(0)).toBe('không');
        expect(numberToWords(1)).toBe('một');
        expect(numberToWords(5)).toBe('năm');
        expect(numberToWords(9)).toBe('chín');
    });

    test('should convert two-digit numbers', () => {
        expect(numberToWords(10)).toBe('mười');
        expect(numberToWords(15)).toBe('mười lăm');
        expect(numberToWords(21)).toBe('hai mươi mốt');
        expect(numberToWords(75)).toBe('bảy mươi lăm');
        expect(numberToWords(99)).toBe('chín mươi chín');
    });

    test('should convert three-digit numbers', () => {
        expect(numberToWords(100)).toBe('một trăm');
        expect(numberToWords(105)).toBe('một trăm linh năm');
        expect(numberToWords(210)).toBe('hai trăm mười');
        expect(numberToWords(999)).toBe('chín trăm chín mươi chín');
    });

    test('should convert four-digit numbers', () => {
        expect(numberToWords(1000)).toBe('một nghìn');
        expect(numberToWords(1005)).toBe('một nghìn không trăm linh năm');
        expect(numberToWords(1010)).toBe('một nghìn không trăm mười');
        expect(numberToWords(1234)).toBe('một nghìn hai trăm ba mươi bốn');
        expect(numberToWords(9999)).toBe('chín nghìn chín trăm chín mươi chín');
    });

    test('should convert large numbers', () => {
        expect(numberToWords(1000000)).toBe('một triệu');
        expect(numberToWords(500000000)).toBe('năm trăm triệu');
        expect(numberToWords(1000000000)).toBe('một tỷ');
        expect(numberToWords(1234567890)).toBe(
            'một tỷ hai trăm ba mươi bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi',
        );
    });

    test('should handle numbers that require "linh" or "không"', () => {
        expect(numberToWords(101)).toBe('một trăm linh một');
        expect(numberToWords(120)).toBe('một trăm hai mươi');
        expect(numberToWords(2001)).toBe('hai nghìn không trăm linh một');
    });

    test('should handle numbers that might have redundant "linh" or "không"', () => {
        expect(numberToWords(1050)).toBe('một nghìn không trăm năm mươi');
        expect(numberToWords(1500)).toBe('một nghìn năm trăm');
        expect(numberToWords(1110)).toBe('một nghìn một trăm mười');
    });

    test('should handle numbers close to the next thousand', () => {
        expect(numberToWords(999)).toBe('chín trăm chín mươi chín');
        expect(numberToWords(1000)).toBe('một nghìn');
        expect(numberToWords(1001)).toBe('một nghìn không trăm linh một');
    });
});

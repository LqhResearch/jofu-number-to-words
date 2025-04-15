import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.vi', () => {
    test('should convert single-digit numbers', () => {
        expect(toWords.vi(0)).toBe('không');
        expect(toWords.vi(1)).toBe('một');
        expect(toWords.vi(5)).toBe('năm');
        expect(toWords.vi(9)).toBe('chín');
    });

    test('should convert two-digit numbers', () => {
        expect(toWords.vi(10)).toBe('mười');
        expect(toWords.vi(15)).toBe('mười lăm');
        expect(toWords.vi(21)).toBe('hai mươi mốt');
        expect(toWords.vi(75)).toBe('bảy mươi lăm');
        expect(toWords.vi(99)).toBe('chín mươi chín');
    });

    test('should convert three-digit numbers', () => {
        expect(toWords.vi(100)).toBe('một trăm');
        expect(toWords.vi(105)).toBe('một trăm linh năm');
        expect(toWords.vi(210)).toBe('hai trăm mười');
        expect(toWords.vi(999)).toBe('chín trăm chín mươi chín');
    });

    test('should convert four-digit numbers', () => {
        expect(toWords.vi(1000)).toBe('một nghìn');
        expect(toWords.vi(1005)).toBe('một nghìn không trăm linh năm');
        expect(toWords.vi(1010)).toBe('một nghìn không trăm mười');
        expect(toWords.vi(1234)).toBe('một nghìn hai trăm ba mươi bốn');
        expect(toWords.vi(9999)).toBe('chín nghìn chín trăm chín mươi chín');
    });

    test('should convert large numbers', () => {
        expect(toWords.vi(1000000)).toBe('một triệu');
        expect(toWords.vi(5105000)).toBe('năm triệu một trăm linh năm nghìn');
        expect(toWords.vi(1512347)).toBe('một triệu năm trăm mười hai nghìn ba trăm bốn mươi bảy');
        expect(toWords.vi(500000000)).toBe('năm trăm triệu');
        expect(toWords.vi(1000000000)).toBe('một tỷ');
        expect(toWords.vi(1234567890)).toBe(
            'một tỷ hai trăm ba mươi bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi',
        );
    });

    test('should handle numbers that require "linh" or "không"', () => {
        expect(toWords.vi(101)).toBe('một trăm linh một');
        expect(toWords.vi(113)).toBe('một trăm mười ba');
        expect(toWords.vi(120)).toBe('một trăm hai mươi');
        expect(toWords.vi(2001)).toBe('hai nghìn không trăm linh một');
    });

    test('should handle numbers that might have redundant "linh" or "không"', () => {
        expect(toWords.vi(1050)).toBe('một nghìn không trăm năm mươi');
        expect(toWords.vi(1500)).toBe('một nghìn năm trăm');
        expect(toWords.vi(1110)).toBe('một nghìn một trăm mười');
    });

    test('should handle numbers close to the next thousand', () => {
        expect(toWords.vi(999)).toBe('chín trăm chín mươi chín');
        expect(toWords.vi(1000)).toBe('một nghìn');
        expect(toWords.vi(1001)).toBe('một nghìn không trăm linh một');
    });
});

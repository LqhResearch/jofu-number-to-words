import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';

describe('numberToWords - Decimal Numbers', () => {
    test('should convert simple decimal numbers', () => {
        expect(numberToWords(1.5)).toBe('một phẩy năm');
        expect(numberToWords(2.75)).toBe('hai phẩy bảy mươi lăm');
        expect(numberToWords(0.1)).toBe('không phẩy một');
    });

    test('should convert negative decimal numbers', () => {
        expect(numberToWords(-3.14)).toBe('âm ba phẩy mười bốn');
        expect(numberToWords(-0.09)).toBe('âm không phẩy không chín');
    });

    test('should convert large decimal numbers', () => {
        expect(numberToWords(1234.567)).toBe(
            'một nghìn hai trăm ba mươi bốn phẩy năm trăm sáu mươi bảy',
        );
        expect(numberToWords(999999.999)).toBe(
            'chín trăm chín mươi chín nghìn chín trăm chín mươi chín phẩy chín trăm chín mươi chín',
        );
    });

    test('should handle numbers with leading zeros in decimal part', () => {
        expect(numberToWords(1.0005)).toBe('một phẩy không không không năm');
        expect(numberToWords(0.005)).toBe('không phẩy không không năm');
    });

    test('should handle zero decimal part', () => {
        expect(numberToWords(1234)).toBe('một nghìn hai trăm ba mươi bốn');
        expect(numberToWords(0)).toBe('không');
        expect(numberToWords(-56)).toBe('âm năm mươi sáu');
    });

    test('should handle decimal part with leading zeros and non-zero digits', () => {
        expect(numberToWords(5.003)).toBe('năm phẩy không không ba');
        expect(numberToWords(0.009)).toBe('không phẩy không không chín');
    });

    test('should handle large negative decimal numbers', () => {
        expect(numberToWords(-1234567.890123)).toBe(
            'âm một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy phẩy tám trăm chín mươi nghìn một trăm hai mươi ba',
        );
    });
});

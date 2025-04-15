import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.vi - Decimal Numbers', () => {
    test('should convert simple decimal numbers', () => {
        expect(toWords.vi(1.5)).toBe('một phẩy năm');
        expect(toWords.vi(2.75)).toBe('hai phẩy bảy mươi lăm');
        expect(toWords.vi(0.1)).toBe('không phẩy một');
    });

    test('should convert negative decimal numbers', () => {
        expect(toWords.vi(-3.14)).toBe('âm ba phẩy mười bốn');
        expect(toWords.vi(-0.09)).toBe('âm không phẩy không chín');
    });

    test('should convert large decimal numbers', () => {
        expect(toWords.vi(1234.567)).toBe(
            'một nghìn hai trăm ba mươi bốn phẩy năm trăm sáu mươi bảy',
        );
        expect(toWords.vi(999999.999)).toBe(
            'chín trăm chín mươi chín nghìn chín trăm chín mươi chín phẩy chín trăm chín mươi chín',
        );
    });

    test('should handle numbers with leading zeros in decimal part', () => {
        expect(toWords.vi(1.0005)).toBe('một phẩy không không không năm');
        expect(toWords.vi(0.005)).toBe('không phẩy không không năm');
    });

    test('should handle zero decimal part', () => {
        expect(toWords.vi(1234)).toBe('một nghìn hai trăm ba mươi bốn');
        expect(toWords.vi(0)).toBe('không');
        expect(toWords.vi(-56)).toBe('âm năm mươi sáu');
    });

    test('should handle decimal part with leading zeros and non-zero digits', () => {
        expect(toWords.vi(5.003)).toBe('năm phẩy không không ba');
        expect(toWords.vi(0.009)).toBe('không phẩy không không chín');
    });

    test('should handle large negative decimal numbers', () => {
        expect(toWords.vi(-1234567.890123)).toBe(
            'âm một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy phẩy tám trăm chín mươi nghìn một trăm hai mươi ba',
        );
    });
});

import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.vi - Negative Numbers', () => {
    test('should convert negative single-digit numbers', () => {
        expect(toWords.vi(-1)).toBe('âm một');
        expect(toWords.vi(-5)).toBe('âm năm');
        expect(toWords.vi(-9)).toBe('âm chín');
    });

    test('should convert negative two-digit numbers', () => {
        expect(toWords.vi(-10)).toBe('âm mười');
        expect(toWords.vi(-15)).toBe('âm mười lăm');
        expect(toWords.vi(-75)).toBe('âm bảy mươi lăm');
        expect(toWords.vi(-21)).toBe('âm hai mươi mốt');
        expect(toWords.vi(-99)).toBe('âm chín mươi chín');
    });

    test('should convert negative three-digit numbers', () => {
        expect(toWords.vi(-100)).toBe('âm một trăm');
        expect(toWords.vi(-105)).toBe('âm một trăm linh năm');
        expect(toWords.vi(-210)).toBe('âm hai trăm mười');
        expect(toWords.vi(-999)).toBe('âm chín trăm chín mươi chín');
    });

    test('should convert negative four-digit numbers', () => {
        expect(toWords.vi(-1000)).toBe('âm một nghìn');
        expect(toWords.vi(-1005)).toBe('âm một nghìn không trăm linh năm');
        expect(toWords.vi(-1010)).toBe('âm một nghìn không trăm mười');
        expect(toWords.vi(-1234)).toBe('âm một nghìn hai trăm ba mươi bốn');
        expect(toWords.vi(-9999)).toBe('âm chín nghìn chín trăm chín mươi chín');
    });

    test('should convert large negative numbers', () => {
        expect(toWords.vi(-1000000)).toBe('âm một triệu');
        expect(toWords.vi(-5105000)).toBe('âm năm triệu một trăm linh năm nghìn');
        expect(toWords.vi(-500000000)).toBe('âm năm trăm triệu');
        expect(toWords.vi(-1000000000)).toBe('âm một tỷ');
        expect(toWords.vi(-1234567890)).toBe(
            'âm một tỷ hai trăm ba mươi bốn triệu năm trăm sáu mươi bảy nghìn tám trăm chín mươi',
        );
    });
});

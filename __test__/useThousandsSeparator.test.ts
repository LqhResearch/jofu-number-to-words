import { describe, expect, test } from 'vitest';
import { numberToWords } from '../src/converter';
import { NumberToWordsConfig } from '../src/interfaces/config';

describe('numberToWords with useThousandsSeparator = true', () => {
    const config: NumberToWordsConfig = { fractionalPrefix: 'linh', useThousandsSeparator: true };

    test('should convert large numbers with separators', () => {
        expect(numberToWords(1000000, config)).toBe('một triệu');
        expect(numberToWords(1512347, config)).toBe(
            'một triệu, năm trăm mười hai nghìn, ba trăm bốn mươi bảy',
        );
        expect(numberToWords(500000000, config)).toBe('năm trăm triệu');
        expect(numberToWords(1000000000, config)).toBe('một tỷ');
        expect(numberToWords(1234567890, config)).toBe(
            'một tỷ, hai trăm ba mươi bốn triệu, năm trăm sáu mươi bảy nghìn, tám trăm chín mươi',
        );
    });

    test('should convert four-digit numbers with separators', () => {
        expect(numberToWords(1000, config)).toBe('một nghìn');
        expect(numberToWords(1005, config)).toBe('một nghìn, không trăm linh năm');
        expect(numberToWords(1234, config)).toBe('một nghìn, hai trăm ba mươi bốn');
    });

    test('should handle numbers that require "linh" or "không" with separators', () => {
        expect(numberToWords(2001, config)).toBe('hai nghìn, không trăm linh một');
        expect(numberToWords(1050, config)).toBe('một nghìn, không trăm năm mươi');
    });

    test('should keep format clean without unnecessary commas', () => {
        expect(numberToWords(100000000, config)).toBe('một trăm triệu');
        expect(numberToWords(100000, config)).toBe('một trăm nghìn');
        expect(numberToWords(100, config)).toBe('một trăm');
    });
});

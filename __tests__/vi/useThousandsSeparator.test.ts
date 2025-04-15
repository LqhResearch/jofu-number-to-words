import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { VietnameseConfig } from '../../src/interfaces/config';

describe('toWords.vi with useThousandsSeparator = true', () => {
    const config: VietnameseConfig = { fractionalPrefix: 'linh', useThousandsSeparator: true };

    test('should convert large numbers with separators', () => {
        expect(toWords.vi(1000000, config)).toBe('một triệu');
        expect(toWords.vi(1512347, config)).toBe(
            'một triệu, năm trăm mười hai nghìn, ba trăm bốn mươi bảy',
        );
        expect(toWords.vi(500000000, config)).toBe('năm trăm triệu');
        expect(toWords.vi(1000000000, config)).toBe('một tỷ');
        expect(toWords.vi(1234567890, config)).toBe(
            'một tỷ, hai trăm ba mươi bốn triệu, năm trăm sáu mươi bảy nghìn, tám trăm chín mươi',
        );
    });

    test('should convert four-digit numbers with separators', () => {
        expect(toWords.vi(1000, config)).toBe('một nghìn');
        expect(toWords.vi(1005, config)).toBe('một nghìn, không trăm linh năm');
        expect(toWords.vi(1234, config)).toBe('một nghìn, hai trăm ba mươi bốn');
    });

    test('should handle numbers that require "linh" or "không" with separators', () => {
        expect(toWords.vi(2001, config)).toBe('hai nghìn, không trăm linh một');
        expect(toWords.vi(1050, config)).toBe('một nghìn, không trăm năm mươi');
    });

    test('should keep format clean without unnecessary commas', () => {
        expect(toWords.vi(100000000, config)).toBe('một trăm triệu');
        expect(toWords.vi(100000, config)).toBe('một trăm nghìn');
        expect(toWords.vi(100, config)).toBe('một trăm');
    });
});

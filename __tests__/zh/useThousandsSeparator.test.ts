import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { ChineseConfig } from '../../src/interfaces/config';

describe('toWords.zh with useThousandsSeparator = true', () => {
    const config: ChineseConfig = { useThousandsSeparator: true };

    test('should convert large numbers with separators', () => {
        expect(toWords.zh(1000000, config)).toBe('一百万');
        expect(toWords.zh(1512347, config)).toBe('一百万, 五十二万, 三千四百四十七');
        expect(toWords.zh(500000000, config)).toBe('五亿');
        expect(toWords.zh(1000000000, config)).toBe('十亿');
        expect(toWords.zh(1234567890, config)).toBe('十二亿, 三千四百五十六万, 七千八百九十');
    });

    test('should convert four-digit numbers with separators', () => {
        expect(toWords.zh(1000, config)).toBe('一千');
        expect(toWords.zh(1005, config)).toBe('一千, 零五');
        expect(toWords.zh(1234, config)).toBe('一千, 二百三十四');
    });

    test('should handle numbers that require 零 with separators', () => {
        expect(toWords.zh(2001, config)).toBe('二千, 零一');
        expect(toWords.zh(1050, config)).toBe('一千, 零五十');
    });

    test('should keep format clean without unnecessary commas', () => {
        expect(toWords.zh(100000000, config)).toBe('一亿');
        expect(toWords.zh(100000, config)).toBe('十万');
        expect(toWords.zh(100, config)).toBe('一百');
    });
});

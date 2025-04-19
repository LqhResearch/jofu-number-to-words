import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.zh - Decimal Numbers', () => {
    test('should convert simple decimal numbers', () => {
        expect(toWords.zh(1.5)).toBe('一点五');
        expect(toWords.zh(2.75)).toBe('二点七五');
        expect(toWords.zh(0.1)).toBe('零点一');
    });

    test('should convert negative decimal numbers', () => {
        expect(toWords.zh(-3.14)).toBe('负三点一四');
        expect(toWords.zh(-0.09)).toBe('负零点零九');
    });

    test('should convert large decimal numbers', () => {
        expect(toWords.zh(1234.567)).toBe('一千二百三十四点五六七');
        expect(toWords.zh(999999.999)).toBe('九十九万九千九百九十九点九九九');
    });

    test('should handle numbers with leading zeros in decimal part', () => {
        expect(toWords.zh(1.0005)).toBe('一点零零零五');
        expect(toWords.zh(0.005)).toBe('零点零零五');
    });

    test('should handle zero decimal part', () => {
        expect(toWords.zh(1234)).toBe('一千二百三十四');
        expect(toWords.zh(0)).toBe('零');
        expect(toWords.zh(-56)).toBe('负五十六');
    });

    test('should handle decimal part with leading zeros and non-zero digits', () => {
        expect(toWords.zh(5.003)).toBe('五点零零三');
        expect(toWords.zh(0.009)).toBe('零点零零九');
    });

    test('should handle large negative decimal numbers', () => {
        expect(toWords.zh(-1234567.890123)).toBe('负一百二十三万四千五百六十七点八九零一二三');
    });
});

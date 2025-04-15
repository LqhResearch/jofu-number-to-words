import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.en - Decimal Numbers', () => {
    test('should convert simple decimal numbers', () => {
        expect(toWords.en(1.5)).toBe('one point five');
        expect(toWords.en(2.75)).toBe('two point seventy-five');
        expect(toWords.en(0.1)).toBe('zero point one');
    });

    test('should convert negative decimal numbers', () => {
        expect(toWords.en(-3.14)).toBe('negative three point fourteen');
        expect(toWords.en(-0.09)).toBe('negative zero point zero nine');
    });

    test('should convert large decimal numbers', () => {
        expect(toWords.en(1234.567)).toBe(
            'one thousand two hundred and thirty-four point five hundred and sixty-seven',
        );
        expect(toWords.en(999999.999)).toBe(
            'nine hundred and ninety-nine thousand nine hundred and ninety-nine point nine hundred and ninety-nine',
        );
    });

    test('should handle numbers with leading zeros in decimal part', () => {
        expect(toWords.en(1.0005)).toBe('one point zero zero zero five');
        expect(toWords.en(0.005)).toBe('zero point zero zero five');
    });

    test('should handle zero decimal part', () => {
        expect(toWords.en(1234)).toBe('one thousand two hundred and thirty-four');
        expect(toWords.en(0)).toBe('zero');
        expect(toWords.en(-56)).toBe('negative fifty-six');
    });

    test('should handle decimal part with leading zeros and non-zero digits', () => {
        expect(toWords.en(5.003)).toBe('five point zero zero three');
        expect(toWords.en(0.009)).toBe('zero point zero zero nine');
    });

    test('should handle large negative decimal numbers', () => {
        expect(toWords.en(-1234567.890123)).toBe(
            'negative one million two hundred and thirty-four thousand five hundred and sixty-seven point eight hundred and ninety thousand one hundred and twenty-three',
        );
    });
});

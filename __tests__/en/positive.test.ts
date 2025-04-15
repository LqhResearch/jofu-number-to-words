import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.en', () => {
    test('should convert single-digit numbers', () => {
        expect(toWords.en(0)).toBe('zero');
        expect(toWords.en(1)).toBe('one');
        expect(toWords.en(5)).toBe('five');
        expect(toWords.en(9)).toBe('nine');
    });

    test('should convert two-digit numbers', () => {
        expect(toWords.en(10)).toBe('ten');
        expect(toWords.en(15)).toBe('fifteen');
        expect(toWords.en(21)).toBe('twenty-one');
        expect(toWords.en(75)).toBe('seventy-five');
        expect(toWords.en(99)).toBe('ninety-nine');
    });

    test('should convert three-digit numbers', () => {
        expect(toWords.en(100)).toBe('one hundred');
        expect(toWords.en(105)).toBe('one hundred and five');
        expect(toWords.en(210)).toBe('two hundred and ten');
        expect(toWords.en(999)).toBe('nine hundred and ninety-nine');
    });

    test('should convert four-digit numbers', () => {
        expect(toWords.en(1000)).toBe('one thousand');
        expect(toWords.en(1005)).toBe('one thousand and five');
        expect(toWords.en(1010)).toBe('one thousand and ten');
        expect(toWords.en(1234)).toBe('one thousand two hundred and thirty-four');
        expect(toWords.en(9999)).toBe('nine thousand nine hundred and ninety-nine');
    });

    test('should convert large numbers', () => {
        expect(toWords.en(1000000)).toBe('one million');
        expect(toWords.en(5105000)).toBe('five million one hundred and five thousand');
        expect(toWords.en(1512347)).toBe(
            'one million five hundred and twelve thousand three hundred and forty-seven',
        );
        expect(toWords.en(500000000)).toBe('five hundred million');
        expect(toWords.en(1000000000)).toBe('one billion');
        expect(toWords.en(1234567890)).toBe(
            'one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety',
        );
    });

    test('should handle numbers that require "and"', () => {
        expect(toWords.en(101)).toBe('one hundred and one');
        expect(toWords.en(113)).toBe('one hundred and thirteen');
        expect(toWords.en(120)).toBe('one hundred and twenty');
        expect(toWords.en(2001)).toBe('two thousand and one');
    });

    test('should handle numbers that might have omitted "and"', () => {
        expect(toWords.en(1050)).toBe('one thousand and fifty');
        expect(toWords.en(1500)).toBe('one thousand five hundred');
        expect(toWords.en(1110)).toBe('one thousand one hundred and ten');
    });

    test('should handle numbers close to the next thousand', () => {
        expect(toWords.en(999)).toBe('nine hundred and ninety-nine');
        expect(toWords.en(1000)).toBe('one thousand');
        expect(toWords.en(1001)).toBe('one thousand and one');
    });
});

import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.en - Negative Numbers', () => {
    test('should convert negative single-digit numbers', () => {
        expect(toWords.en(-1)).toBe('negative one');
        expect(toWords.en(-5)).toBe('negative five');
        expect(toWords.en(-9)).toBe('negative nine');
    });

    test('should convert negative two-digit numbers', () => {
        expect(toWords.en(-10)).toBe('negative ten');
        expect(toWords.en(-15)).toBe('negative fifteen');
        expect(toWords.en(-75)).toBe('negative seventy-five');
        expect(toWords.en(-21)).toBe('negative twenty-one');
        expect(toWords.en(-99)).toBe('negative ninety-nine');
    });

    test('should convert negative three-digit numbers', () => {
        expect(toWords.en(-100)).toBe('negative one hundred');
        expect(toWords.en(-105)).toBe('negative one hundred and five');
        expect(toWords.en(-210)).toBe('negative two hundred and ten');
        expect(toWords.en(-999)).toBe('negative nine hundred and ninety-nine');
    });

    test('should convert negative four-digit numbers', () => {
        expect(toWords.en(-1000)).toBe('negative one thousand');
        expect(toWords.en(-1005)).toBe('negative one thousand and five');
        expect(toWords.en(-1010)).toBe('negative one thousand and ten');
        expect(toWords.en(-1234)).toBe('negative one thousand two hundred and thirty-four');
        expect(toWords.en(-9999)).toBe('negative nine thousand nine hundred and ninety-nine');
    });

    test('should convert large negative numbers', () => {
        expect(toWords.en(-1000000)).toBe('negative one million');
        expect(toWords.en(-5105000)).toBe('negative five million one hundred and five thousand');
        expect(toWords.en(-500000000)).toBe('negative five hundred million');
        expect(toWords.en(-1000000000)).toBe('negative one billion');
        expect(toWords.en(-1234567890)).toBe(
            'negative one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety',
        );
    });
});

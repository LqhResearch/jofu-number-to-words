import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { EnglishConfig } from '../../src/interfaces/config';

describe('toWords.en with useThousandsSeparator = true', () => {
    const config: EnglishConfig = { useThousandsSeparator: true };

    test('should convert large numbers with separators', () => {
        expect(toWords.en(1000000, config)).toBe('one million');
        expect(toWords.en(1512347, config)).toBe(
            'one million, five hundred twelve thousand, three hundred forty-seven',
        );
        expect(toWords.en(500000000, config)).toBe('five hundred million');
        expect(toWords.en(1000000000, config)).toBe('one billion');
        expect(toWords.en(1234567890, config)).toBe(
            'one billion, two hundred thirty-four million, five hundred sixty-seven thousand, eight hundred ninety',
        );
    });

    test('should convert four-digit numbers with separators', () => {
        expect(toWords.en(1000, config)).toBe('one thousand');
        expect(toWords.en(1005, config)).toBe('one thousand, five');
        expect(toWords.en(1234, config)).toBe('one thousand, two hundred thirty-four');
    });

    test('should handle numbers with "and" or leading zeros in hundreds', () => {
        expect(toWords.en(2001, config)).toBe('two thousand, one');
        expect(toWords.en(1050, config)).toBe('one thousand, fifty');
    });

    test('should keep format clean without unnecessary commas', () => {
        expect(toWords.en(100000000, config)).toBe('one hundred million');
        expect(toWords.en(100000, config)).toBe('one hundred thousand');
        expect(toWords.en(100, config)).toBe('one hundred');
    });
});

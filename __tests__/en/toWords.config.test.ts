import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { EnglishConfig } from '../../src/interfaces/config';

describe('toWords.en - Decimal and Fractional Prefix Config', () => {
    test('should use default "point" and no thousands separator', () => {
        expect(toWords.en(1.5)).toBe('one point five');
        expect(toWords.en(10.02)).toBe('ten point zero two');
    });

    test('should support thousands separator when enabled', () => {
        const config: EnglishConfig = { useThousandsSeparator: true };

        expect(toWords.en(1234567, config)).toBe(
            'one million, two hundred thirty-four thousand, five hundred sixty-seven',
        );
    });
});

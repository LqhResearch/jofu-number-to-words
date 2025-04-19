import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';
import { ChineseConfig } from '../../src/interfaces/config';

describe('toWords.zh - Decimal and Fractional Config', () => {
    test('should use default "点"', () => {
        expect(toWords.zh(1.5)).toBe('一点五');
        expect(toWords.zh(10.02)).toBe('十点零二');
    });

    test('should allow custom decimal separator', () => {
        const config: ChineseConfig = { decimalSeparator: '点儿' };

        expect(toWords.zh(1.5, config)).toBe('一点儿五');
        expect(toWords.zh(10.02, config)).toBe('十点儿零二');
    });
});

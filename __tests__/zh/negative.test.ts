import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.zh - Negative Numbers', () => {
    test('should convert negative single-digit numbers', () => {
        expect(toWords.zh(-1)).toBe('负一');
        expect(toWords.zh(-5)).toBe('负五');
        expect(toWords.zh(-9)).toBe('负九');
    });

    test('should convert negative two-digit numbers', () => {
        expect(toWords.zh(-10)).toBe('负十');
        expect(toWords.zh(-15)).toBe('负十五');
        expect(toWords.zh(-75)).toBe('负七十五');
        expect(toWords.zh(-21)).toBe('负二十一');
        expect(toWords.zh(-99)).toBe('负九十九');
    });

    test('should convert negative three-digit numbers', () => {
        expect(toWords.zh(-100)).toBe('负一百');
        expect(toWords.zh(-105)).toBe('负一百零五');
        expect(toWords.zh(-210)).toBe('负二百一十');
        expect(toWords.zh(-999)).toBe('负九百九十九');
    });

    test('should convert negative four-digit numbers', () => {
        expect(toWords.zh(-1000)).toBe('负一千');
        expect(toWords.zh(-1005)).toBe('负一千零五');
        expect(toWords.zh(-1010)).toBe('负一千零一十');
        expect(toWords.zh(-1234)).toBe('负一千二百三十四');
        expect(toWords.zh(-9999)).toBe('负九千九百九十九');
    });

    test('should convert large negative numbers', () => {
        expect(toWords.zh(-1000000)).toBe('负一百万');
        expect(toWords.zh(-5105000)).toBe('负五百一十万五千');
        expect(toWords.zh(-500000000)).toBe('负五亿');
        expect(toWords.zh(-1000000000)).toBe('负十亿');
        expect(toWords.zh(-1234567890)).toBe('负十二亿三千四百五十六万七千八百九十');
    });
});

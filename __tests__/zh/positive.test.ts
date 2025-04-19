import { describe, expect, test } from 'vitest';
import { toWords } from '../../src';

describe('toWords.zh', () => {
    test('should convert single-digit numbers', () => {
        expect(toWords.zh(0)).toBe('零');
        expect(toWords.zh(1)).toBe('一');
        expect(toWords.zh(5)).toBe('五');
        expect(toWords.zh(9)).toBe('九');
    });

    test('should convert two-digit numbers', () => {
        expect(toWords.zh(10)).toBe('十');
        expect(toWords.zh(15)).toBe('十五');
        expect(toWords.zh(21)).toBe('二十一');
        expect(toWords.zh(75)).toBe('七十五');
        expect(toWords.zh(99)).toBe('九十九');
    });

    test('should convert three-digit numbers', () => {
        expect(toWords.zh(100)).toBe('一百');
        expect(toWords.zh(105)).toBe('一百零五');
        expect(toWords.zh(210)).toBe('二百一十');
        expect(toWords.zh(999)).toBe('九百九十九');
    });

    test('should convert four-digit numbers', () => {
        expect(toWords.zh(1000)).toBe('一千');
        expect(toWords.zh(1005)).toBe('一千零五');
        expect(toWords.zh(1010)).toBe('一千零一十');
        expect(toWords.zh(1234)).toBe('一千二百三十四');
        expect(toWords.zh(9999)).toBe('九千九百九十九');
    });

    test('should convert large numbers', () => {
        expect(toWords.zh(1000000)).toBe('一百万');
        expect(toWords.zh(5105000)).toBe('五百一十万五千');
        expect(toWords.zh(1512347)).toBe('一百五十一万二千三百四十七');
        expect(toWords.zh(500000000)).toBe('五亿');
        expect(toWords.zh(1000000000)).toBe('十亿');
        expect(toWords.zh(1234567890)).toBe('十二亿三千四百五十六万七千八百九十');
    });

    test('should handle numbers with internal zeroes', () => {
        expect(toWords.zh(101)).toBe('一百零一');
        expect(toWords.zh(113)).toBe('一百一十三');
        expect(toWords.zh(120)).toBe('一百二十');
        expect(toWords.zh(2001)).toBe('二千零一');
    });

    test('should handle numbers with multiple zero groups', () => {
        expect(toWords.zh(1050)).toBe('一千零五十');
        expect(toWords.zh(1500)).toBe('一千五百');
        expect(toWords.zh(1110)).toBe('一千一百一十');
    });

    test('should handle numbers close to the next thousand', () => {
        expect(toWords.zh(999)).toBe('九百九十九');
        expect(toWords.zh(1000)).toBe('一千');
        expect(toWords.zh(1001)).toBe('一千零一');
    });
});

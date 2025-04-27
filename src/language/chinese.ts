import { ChineseConfig } from '../interfaces/config';

const simplifiedDigits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const traditionalDigits = ['零', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖'];
const units = ['', '十', '百', '千'];
const bigUnits = ['', '万', '亿', '兆'];

function toWords3Digits(num: number, config: ChineseConfig): string {
    const digits = config.useTraditional ? traditionalDigits : simplifiedDigits;
    if (num === 0) return digits[0];

    let result = '';
    let hasZero: boolean = false;

    const isPowerOfTen = (num: number) => [10, 100, 1000, 10000, 100000].includes(num);

    for (let i = 0; i < 4; i++) {
        const unit = units[3 - i];
        const digit = Math.floor(num / Math.pow(10, 3 - i)) % 10;

        if (digit === 0) {
            hasZero = !!result && !result.endsWith(digits[0]);
        } else {
            if (hasZero) {
                result += digits[0];
                hasZero = false;
            }

            if (i === 0 && digit === 1 && unit === '千' && !result) {
                result += '一';
            }

            if (i === 0 && digit === 1 && (unit === '十' || unit === '百' || unit === '千')) {
                result += unit;
            } else {
                result += digits[digit] + unit;
            }
        }
    }

    return result.replace(/零+$/g, '').replace(/^一十/g, '十');
}

function splitIntoChunks(num: number): number[] {
    const chunks: number[] = [];
    while (num > 0) {
        chunks.unshift(num % 10000);
        num = Math.floor(num / 10000);
    }
    return chunks;
}

function integerToWords(num: number, config: ChineseConfig): string {
    const digits = config.useTraditional ? traditionalDigits : simplifiedDigits;
    if (num === 0) return digits[0];

    const chunks = splitIntoChunks(num);
    const parts: string[] = [];

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const chunkText = toWords3Digits(chunk, config);
        const unit = bigUnits[chunks.length - 1 - i];

        if (chunkText) {
            if (unit) {
                parts.push(chunkText + unit);
            } else {
                parts.push(chunkText);
            }
        } else if (i !== chunks.length - 1) {
            parts.push(digits[0]);
        }
    }

    let result = parts
        .join('')
        .replace(/零+/g, '零')
        .replace(/零$/, '')
        .replace(/零万/g, '万')
        .replace(/零亿/g, '亿')
        .replace(/零兆/g, '兆');

    result = result.replace(/亿万/g, '亿');

    return result;
}

function decimalToWords(decimal: string, config: ChineseConfig): string {
    const digits = config.useTraditional ? traditionalDigits : simplifiedDigits;
    if (!decimal) return '';
    return (
        config.decimalSeparator +
        decimal
            .split('')
            .map((d) => digits[parseInt(d)])
            .join('')
    );
}

export function toWords(
    number: number,
    config: ChineseConfig = {
        decimalSeparator: '点',
        useTraditional: false,
    },
): string {
    if (number === 0) return simplifiedDigits[0];
    if (number < 0) return '负' + toWords(-number, config);

    const [intPart, decimalPart] = number.toString().split('.');
    let result = integerToWords(Number(intPart), config);

    if (decimalPart) {
        result += decimalToWords(decimalPart, config);
    }

    return result;
}

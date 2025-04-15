import { EnglishConfig } from '../interfaces/config';

function toWords3Digits(number: number, isBefore: boolean = false, config: EnglishConfig): string {
    const numberWords = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    const tensWords = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    const teensWords = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;

    let result = '';

    if (hundreds > 0) {
        result += `${numberWords[hundreds]} hundred`;
        if (tens > 0 || units > 0) {
            result += ` ${config.and}`;
        }
    }

    if (tens > 1) {
        result += ` ${tensWords[tens]}`;
        if (units > 0) {
            result += `-${numberWords[units]}`;
        }
    } else if (tens === 1) {
        result += ` ${teensWords[units]}`;
    } else if (units > 0) {
        result += ` ${numberWords[units]}`;
    }

    return result.replace(' undefined', '').trim();
}

function splitIntoChunks(number: number): number[] {
    const chunks: number[] = [];

    while (number > 0) {
        chunks.unshift(number % 1000);
        number = Math.floor(number / 1000);
    }

    return chunks;
}

function integerToWords(number: number, config: EnglishConfig): string {
    const unitNames = ['', 'thousand', 'million', 'billion', 'trillion'];
    const numberChunks = splitIntoChunks(number);

    const words: string[] = [];

    numberChunks.forEach((chunk, index) => {
        if (chunk !== 0) {
            const chunkWords = toWords3Digits(chunk, index !== 0, config);

            const unitIndex = numberChunks.length - 1 - index;
            const unit = unitNames[unitIndex] || '';

            let phrase = chunkWords + (unit ? ` ${unit}` : '');

            const remainingChunks = numberChunks.slice(index + 1);
            const allRemainingZero = remainingChunks.every((c) => c === 0);
            const nextChunk = remainingChunks[0];

            const shouldAddAnd =
                unit === 'thousand' &&
                !allRemainingZero &&
                nextChunk < 100 &&
                nextChunk > 0 &&
                nextChunk % 100 !== 0;

            if (shouldAddAnd) {
                phrase += ` ${config.and}`;
            }

            words.push(phrase);
        }
    });

    return config.useThousandsSeparator
        ? words.join(', ').replace(' undefined', '')
        : words.join(' ');
}

function decimalToWords(decimalPart: string, config: EnglishConfig): string {
    if (!decimalPart) return '';

    let words = config.point + ' ';

    if (Number(decimalPart) === 0) {
        words += 'zero';
    } else {
        for (let i = 0; i < decimalPart.length; i++) {
            if (decimalPart[i] === '0') {
                words += 'zero ';
            } else {
                break;
            }
        }

        words += integerToWords(Number(decimalPart), config);
    }

    return words.trim();
}

export function toWords(
    number: number,
    config: EnglishConfig = {
        useThousandsSeparator: false,
        point: 'point',
        and: 'and',
    },
): string {
    if (number === 0) return 'zero';
    if (number < 0) return 'negative ' + toWords(-number, config);

    const [integerPart, decimalPart] = number.toString().split('.');

    let words = integerToWords(Number(integerPart), config);

    if (decimalPart) {
        if (Number(integerPart) === 0) {
            words += ' zero';
        }
        words += ' ' + decimalToWords(decimalPart, config);
    }

    return words.trim();
}

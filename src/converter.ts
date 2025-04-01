function toWords3Digits(number: number, isBefore: boolean = false): string {
    const numberWords = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;

    let result = '';

    if (hundreds > 0) {
        result += numberWords[hundreds] + ' trăm';

        if (tens == 0 && units > 0) {
            result += ' linh';
        }
    } else if (tens > 0 || units > 0) {
        if (isBefore) {
            result += 'không trăm';
        }
    }

    if (tens > 1) {
        result += ` ${numberWords[tens]} mươi`;
        if (units === 1) {
            result += ' mốt';
        } else if (units == 5) {
            result += ' lăm';
        } else if (units > 0) {
            result += ` ${numberWords[units]}`;
        }
    } else if (tens === 1) {
        result += ' mười';
        if (units === 5) {
            result += ' lăm';
        } else if (units > 0) {
            result += ` ${numberWords[units]}`;
        }
    } else if (units > 0) {
        if (isBefore) {
            result += ' linh';
        }
        result += ` ${numberWords[units]}`;
    }

    return result.trim();
}

function splitIntoChunks(number: number): number[] {
    const chunks: number[] = [];

    while (number > 0) {
        chunks.unshift(number % 1000);
        number = Math.floor(number / 1000);
    }

    return chunks;
}

function integerToWords(number: number): string {
    const unitNames = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ'];
    const numberChunks = splitIntoChunks(number);

    let result = '';
    numberChunks.forEach((chunk, index) => {
        if (chunk !== 0) {
            result +=
                toWords3Digits(chunk, index !== 0) +
                ' ' +
                unitNames[numberChunks.length - 1 - index] +
                ' ';
        }
    });

    return result.trim();
}

export function numberToWords(number: number): string {
    if (number == 0) return 'không';

    if (number < 0) return 'âm ' + numberToWords(-number);

    const [integerPart, decimalPart] = number.toString().split('.');

    let words = integerToWords(Number(integerPart));

    if (decimalPart) {
        if (Number(integerPart) === 0) {
            words += ' không';
        }
        words += ' phẩy ';

        if (Number(decimalPart) === 0) {
            words += ' không';
        } else {
            for (let i = 0; i < decimalPart.length; i++) {
                if (decimalPart[i] === '0') {
                    words += 'không ';
                } else {
                    break;
                }
            }

            words += integerToWords(Number(decimalPart));
        }

        words = words.trim();
    }

    return words.trim();
}

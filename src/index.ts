import { EnglishConfig, VietnameseConfig } from './interfaces/config';
import { toWords as vietnameseToWords } from './language/vietnamese';
import { toWords as englishToWords } from './language/english';

export const toWords = {
    vi: (num: number, config?: VietnameseConfig): string => vietnameseToWords(num, config),
    en: (num: number, config?: EnglishConfig): string => englishToWords(num, config),
};

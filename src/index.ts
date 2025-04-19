import { ChineseConfig, EnglishConfig, VietnameseConfig } from './interfaces/config';
import { toWords as vietnameseToWords } from './language/vietnamese';
import { toWords as englishToWords } from './language/english';
import { toWords as chineseToWords } from './language/chinese';

export const toWords = {
    vi: (num: number, config?: VietnameseConfig): string => vietnameseToWords(num, config),
    en: (num: number, config?: EnglishConfig): string => englishToWords(num, config),
    zh: (num: number, config?: ChineseConfig): string => chineseToWords(num, config),
};

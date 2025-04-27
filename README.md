> 🌐 This documentation is available in: [🇬🇧 English](./README.md) | [🇻🇳 Vietnamese](./README_vi.md) | [🇨🇳 Chinese](./README_zh.md)

# @jofu/number-to-words

The `@jofu/number-to-words` library provides a reliable and flexible solution for converting numbers into words in Vietnamese, English, and Chinese. It supports converting integers, decimals, and negative numbers, with configuration options to control the formatting of decimal places and thousand separators for all three languages.

## Installation

You can install the library via npm or yarn:

```bash
npm install @jofu/number-to-words
```

Or:

```bash
yarn add @jofu/number-to-words
```

## Usage Guide

### Vietnamese

To convert an integer into words in Vietnamese, simply call the `toWords.vi` function with the number you wish to convert and (optionally) the configuration parameters:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.vi(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### English

To convert an integer into words in English, call the `toWords.en` function with the number to be converted and (optionally) the configuration parameters:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.en(1234567);
console.log(result); // "one million two hundred thirty-four thousand five hundred sixty-seven"
```

### Chinese

To convert an integer into words in Chinese, call the `toWords.zh` function with the number to be converted and (optionally) the configuration parameters:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.zh(1234567);
console.log(result); // "一百万二十三四千五百六十七"
```

## Parameters for `toWords`

The `toWords` function accepts additional configuration parameters to customize the number-to-words conversion. These parameters are provided as objects of type `VietnameseConfig`, `EnglishConfig`, or `ChineseConfig` and can be customized as follows:

| Parameter | Type                                               | Description                                                                                                                                 | Default    |
| --------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `number`  | `number`                                           | The number to convert, which can be an integer, a negative number, or a decimal.                                                            | (Required) |
| `config`  | `VietnameseConfig` `EnglishConfig` `ChineseConfig` | Configuration for number conversion. Can be `VietnameseConfig` for Vietnamese, `EnglishConfig` for English, or `ChineseConfig` for Chinese. | (Required) |

### VietnameseConfig

| Parameter               | Type                 | Description                                                                 | Default  |
| ----------------------- | -------------------- | --------------------------------------------------------------------------- | -------- |
| `decimalSeparator`      | `'phẩy'` \| `'chấm'` | Word used to read the decimal separator (`1.5` → "một _phẩy_ năm").         | `'phẩy'` |
| `fractionalPrefix`      | `'linh'` \| `'lẻ'`   | Prefix used before the first digit of the fractional part (e.g., "lẻ năm"). | `'linh'` |
| `useThousandsSeparator` | `boolean`            | Whether to add a separator for large units like "triệu", "nghìn", etc.      | `false`  |

### EnglishConfig

| Parameter               | Type      | Description                                                                                   | Default   |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------- | --------- |
| `point`                 | `string`  | Word used for the decimal separator in English (`1.5` → "one _point_ five").                  | `'point'` |
| `and`                   | `string`  | Word used to connect parts of numbers with more than one digit, e.g., "one hundred and five". | `'and'`   |
| `useThousandsSeparator` | `boolean` | Whether to add a separator for large units like "million", "thousand", etc.                   | `false`   |

### ChineseConfig

| Parameter          | Type             | Description                                                               | Default |
| ------------------ | ---------------- | ------------------------------------------------------------------------- | ------- |
| `decimalSeparator` | `'点'` \| `'分'` | Word used for the decimal separator in Chinese                            | `'点'`  |
| `useTraditional`   | `boolean`        | Whether to use traditional Chinese numerals (e.g., "一" instead of "一"). | `false` |

## Conclusion

The `@jofu/number-to-words` library offers a simple, efficient, and flexible solution for converting numbers into words in Vietnamese, English, and Chinese. It is the ideal tool for applications requiring numeric values to be represented in text or for user interface display.

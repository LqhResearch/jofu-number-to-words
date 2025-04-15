> 🌐 This documentation is available in: [🇬🇧 English](./README.md) | [🇻🇳 Vietnamese](./README_vi.md)

# @jofu/number-to-words

The `@jofu/number-to-words` library provides accurate and flexible conversion of numbers into words in both Vietnamese and English. It supports integers, decimals, and negative numbers, with configurable options to control how decimals and thousands separators are read in both languages.

## Installation

You can install the library using npm or yarn:

```bash
npm install @jofu/number-to-words
```

Or:

```bash
yarn add @jofu/number-to-words
```

## Usage

### Convert integers to Vietnamese words

To convert an integer to Vietnamese words, simply call `toWords.vi` with the number and (optionally) a config object:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.vi(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### Convert negative numbers to Vietnamese words

The library supports negative numbers:

```typescript
const result = toWords.vi(-123);
console.log(result); // "âm một trăm hai mươi ba"
```

### Convert decimals to Vietnamese words

Decimal numbers are supported with customizable options:

```typescript
const result = toWords.vi(123.45);
console.log(result); // "một trăm hai mươi ba phẩy bốn mươi lăm"
```

### Convert integers to English words

To convert an integer to English words, use `toWords.en`:

```typescript
const result = toWords.en(105);
console.log(result); // "one hundred and five"
```

### Convert decimals to English words

The library supports English decimal reading as well:

```typescript
const result = toWords.en(123.45);
console.log(result); // "one hundred and twenty-three point four five"
```

### Full example

```typescript
import { toWords } from '@jofu/number-to-words';

console.log(toWords.vi(0)); // "không"
console.log(toWords.vi(123)); // "một trăm hai mươi ba"
console.log(toWords.vi(123.45)); // "một trăm hai mươi ba phẩy bốn mươi lăm"
console.log(toWords.vi(-123)); // "âm một trăm hai mươi ba"
console.log(toWords.vi(1000)); // "một nghìn"

console.log(toWords.en(105)); // "one hundred and five"
console.log(toWords.en(123.45)); // "one hundred and twenty-three point four five"
```

## `toWords` Parameters

The `toWords` function accepts an optional configuration object to customize the output. The config is passed as either `VietnameseConfig` or `EnglishConfig`:

| Parameter | Type                                | Description                                                            | Required |
| --------- | ----------------------------------- | ---------------------------------------------------------------------- | -------- |
| `number`  | `number`                            | The number to convert. Can be an integer, negative number, or decimal. | Yes      |
| `config`  | `VietnameseConfig \| EnglishConfig` | Configuration object for Vietnamese or English number reading.         | Optional |

### VietnameseConfig

| Option                  | Type                 | Description                                                         | Default  |
| ----------------------- | -------------------- | ------------------------------------------------------------------- | -------- |
| `decimalSeparator`      | `'phẩy'` \| `'chấm'` | Word used for the decimal point (`1.5` → "một _phẩy_ năm").         | `'phẩy'` |
| `fractionalPrefix`      | `'linh'` \| `'lẻ'`   | Prefix before the first digit of the decimal part (e.g., "lẻ năm"). | `'linh'` |
| `useThousandsSeparator` | `boolean`            | Whether to use commas for large units like "triệu", "nghìn", etc.   | `false`  |

### EnglishConfig

| Option                  | Type      | Description                                                                    | Default   |
| ----------------------- | --------- | ------------------------------------------------------------------------------ | --------- |
| `point`                 | `string`  | Word used for the decimal point (`1.5` → "one _point_ five").                  | `'point'` |
| `and`                   | `string`  | Word used to join parts of multi-digit numbers, like "one hundred _and_ five". | `'and'`   |
| `useThousandsSeparator` | `boolean` | Whether to use commas for large units like "million", "thousand", etc.         | `false`   |

## Conclusion

`@jofu/number-to-words` is a simple, powerful, and flexible solution for converting numbers into written words in both Vietnamese and English. It’s ideal for applications that need to display numeric data as text or improve the accessibility and clarity of user interfaces.

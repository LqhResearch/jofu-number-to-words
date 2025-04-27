> 🌐 This documentation is available in: [🇬🇧 English](./README.md) | [🇻🇳 Vietnamese](./README_vi.md) | [🇨🇳 Chinese](./README_zh.md)

# @jofu/number-to-words

`@jofu/number-to-words` 是一个简洁灵活的库，用于将数字转换为越南语、英语和中文的文字。该库支持转换整数、小数和负数，并提供配置选项来控制三个语言的十进制和千位分隔符的显示方式。

## 安装

你可以通过 npm 或 yarn 安装此库：

```bash
npm install @jofu/number-to-words
```

或者：

```bash
yarn add @jofu/number-to-words
```

## 使用指南

### 越南语

要将一个整数转换为越南语文字，只需调用 `toWords.vi` 函数，传入需要转换的数字和（可选的）配置参数：

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.vi(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### 英语

要将一个整数转换为英语文字，只需调用 `toWords.en` 函数，传入需要转换的数字和（可选的）配置参数：

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.en(1234567);
console.log(result); // "one million two hundred thirty-four thousand five hundred sixty-seven"
```

### 中文

要将一个整数转换为中文文字，只需调用 `toWords.zh` 函数，传入需要转换的数字和（可选的）配置参数：

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.zh(1234567);
console.log(result); // "一百万二十三四千五百六十七"
```

## `toWords` 的参数

`toWords` 函数可以接受额外的配置参数，以便自定义数字转换的方式。此配置作为 `VietnameseConfig`、`EnglishConfig` 或 `ChineseConfig` 类型的对象传递，可以按以下方式自定义：

| 参数     | 数据类型                                           | 描述                                                                                                         | 默认值   |
| -------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| `number` | `number`                                           | 要转换的数字，可以是整数、负数或小数。                                                                       | （必填） |
| `config` | `VietnameseConfig` `EnglishConfig` `ChineseConfig` | 配置数字转换的方式。可以是 `VietnameseConfig`（越南语）、`EnglishConfig`（英语）或 `ChineseConfig`（中文）。 | （必填） |

### VietnameseConfig

| 参数                    | 数据类型             | 描述                                                         | 默认值   |
| ----------------------- | -------------------- | ------------------------------------------------------------ | -------- |
| `decimalSeparator`      | `'phẩy'` \| `'chấm'` | 用来读取小数点符号的词汇（例如：`1.5` → "một _phẩy_ năm"）。 | `'phẩy'` |
| `fractionalPrefix`      | `'linh'` \| `'lẻ'`   | 小数部分第一个数字前的前缀（例如：`lẻ năm`）。               | `'linh'` |
| `useThousandsSeparator` | `boolean`            | 是否在大单位之间添加千位分隔符，如“百万”，“千”等。           | `false`  |

### EnglishConfig

| 参数                    | 数据类型  | 描述                                                           | 默认值    |
| ----------------------- | --------- | -------------------------------------------------------------- | --------- |
| `point`                 | `string`  | 用于读取小数点符号的词汇（例如：`1.5` → "one _point_ five"）。 | `'point'` |
| `and`                   | `string`  | 用于连接多位数字的词汇，例如“one hundred and five”。           | `'and'`   |
| `useThousandsSeparator` | `boolean` | 是否在大单位之间添加千位分隔符，如“million”，“thousand”等。    | `false`   |

### ChineseConfig

| 参数               | 数据类型         | 描述                                                         | 默认值  |
| ------------------ | ---------------- | ------------------------------------------------------------ | ------- |
| `decimalSeparator` | `'点'` \| `'分'` | 用于读取中文小数点符号的词汇（例如：`1.5` → "一 _点_ 五"）。 | `'点'`  |
| `useTraditional`   | `boolean`        | 是否使用传统的中文数字（例如：“一”而不是“一”）。             | `false` |

## 结论

`@jofu/number-to-words` 库提供了一个简单、高效和灵活的解决方案，将数字转换为越南语、英语和中文的文字。它是一个理想的工具，适用于需要以文本形式表示数字或在用户界面中显示数字的应用程序。

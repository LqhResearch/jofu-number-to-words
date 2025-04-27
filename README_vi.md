> 🌐 This documentation is available in: [🇬🇧 English](./README.md) | [🇻🇳 Vietnamese](./README_vi.md) | [🇨🇳 Chinese](./README_zh.md)

# @jofu/number-to-words

Thư viện `@jofu/number-to-words` cung cấp một giải pháp đơn giản và linh hoạt để chuyển đổi các số thành chữ bằng tiếng Việt, tiếng Anh và tiếng Trung. Thư viện hỗ trợ chuyển đổi số nguyên, số thập phân và số âm, với các tùy chọn cấu hình cho phép điều chỉnh cách đọc phần thập phân và phân cách hàng nghìn cho cả ba ngôn ngữ.

## Cài đặt

Bạn có thể cài đặt thư viện thông qua npm hoặc yarn:

```bash
npm install @jofu/number-to-words
```

Hoặc:

```bash
yarn add @jofu/number-to-words
```

## Hướng dẫn sử dụng

### Tiếng Việt

Để chuyển đổi một số nguyên thành chữ, bạn chỉ cần gọi hàm `toWords.vi` với số cần chuyển đổi và (tùy chọn) tham số cấu hình:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.vi(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### Tiếng Anh

Để chuyển đổi một số nguyên thành chữ, bạn chỉ cần gọi hàm `toWords.en` với số cần chuyển đổi và (tùy chọn) tham số cấu hình:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.en(1234567);
console.log(result); // "one million two hundred thirty-four thousand five hundred sixty-seven"
```

### Tiếng Trung

Để chuyển đổi một số nguyên thành chữ, bạn chỉ cần gọi hàm `toWords.zh` với số cần chuyển đổi và (tùy chọn) tham số cấu hình:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.zh(1234567);
console.log(result); // "一百万二十三四千五百六十七"
```

## Tham số của `toWords`

Hàm `toWords` có thể nhận tham số cấu hình bổ sung để tùy chỉnh cách đọc số. Cấu hình này được cung cấp dưới dạng đối tượng `VietnameseConfig`, `EnglishConfig` hoặc `ChineseConfig`, và có thể được tùy chỉnh như sau:

| Tham số  | Kiểu dữ liệu                                       | Mô tả                                                                                                                                              | Mặc định   |
| -------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `number` | `number`                                           | Số cần chuyển đổi, có thể là số nguyên, số âm hoặc số thập phân.                                                                                   | (Bắt buộc) |
| `config` | `VietnameseConfig` `EnglishConfig` `ChineseConfig` | Cấu hình cho việc chuyển đổi số. Có thể là `VietnameseConfig` cho tiếng Việt, `EnglishConfig` cho tiếng Anh, hoặc `ChineseConfig` cho tiếng Trung. | (Bắt buộc) |

### VietnameseConfig

| Tham số                 | Kiểu dữ liệu         | Mô tả                                                                    | Mặc định |
| ----------------------- | -------------------- | ------------------------------------------------------------------------ | -------- |
| `decimalSeparator`      | `'phẩy'` \| `'chấm'` | Từ dùng để đọc dấu phân cách thập phân (`1.5` → "một _phẩy_ năm").       | `'phẩy'` |
| `fractionalPrefix`      | `'linh'` \| `'lẻ'`   | Tiền tố dùng trước chữ số đầu tiên của phần thập phân (ví dụ: "lẻ năm"). | `'linh'` |
| `useThousandsSeparator` | `boolean`            | Thêm dấu phẩy giữa các đơn vị lớn như "triệu", "nghìn", v.v...           | `false`  |

### EnglishConfig

| Tham số                 | Kiểu dữ liệu | Mô tả                                                                              | Mặc định  |
| ----------------------- | ------------ | ---------------------------------------------------------------------------------- | --------- |
| `point`                 | `string`     | Từ dùng để đọc dấu phân cách thập phân cho tiếng Anh (`1.5` → "one _point_ five"). | `'point'` |
| `and`                   | `string`     | Từ dùng để nối các phần trong số có hơn một chữ số, ví dụ "one hundred and five".  | `'and'`   |
| `useThousandsSeparator` | `boolean`    | Thêm dấu phẩy giữa các đơn vị lớn như "million", "thousand", v.v...                | `false`   |

### ChineseConfig

| Tham số            | Kiểu dữ liệu     | Mô tả                                                                    | Mặc định |
| ------------------ | ---------------- | ------------------------------------------------------------------------ | -------- |
| `decimalSeparator` | `'点'` \| `'分'` | Từ dùng để đọc dấu phân cách thập phân cho tiếng Trung                   | `'点'`   |
| `useTraditional`   | `boolean`        | Sử dụng chữ số truyền thống trong tiếng Trung (ví dụ: "一" thay vì "一") | `false`  |

## Kết luận

Thư viện `@jofu/number-to-words` cung cấp một giải pháp đơn giản, hiệu quả và linh hoạt để chuyển đổi các số thành chữ bằng tiếng Việt, tiếng Anh và tiếng Trung. Đây là công cụ lý tưởng cho các ứng dụng yêu cầu thể hiện số liệu dưới dạng văn bản hoặc hiển thị trong giao diện người dùng.

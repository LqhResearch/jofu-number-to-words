> 🌐 This documentation is available in: [🇬🇧 English](./README.md) | [🇻🇳 Vietnamese](./README_vi.md)

# @jofu/number-to-words

Thư viện `@jofu/number-to-words` giúp chuyển đổi các số thành chữ tiếng Việt và tiếng Anh một cách chính xác và linh hoạt. Thư viện hỗ trợ chuyển đổi số nguyên, số thập phân và số âm, với các tùy chọn cấu hình để kiểm soát cách đọc các phần thập phân và phân cách hàng nghìn cho cả hai ngôn ngữ.

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

### Chuyển đổi số nguyên thành chữ tiếng Việt

Để chuyển đổi một số nguyên thành chữ, bạn chỉ cần gọi hàm `toWords.vi` với số cần chuyển đổi và (tùy chọn) tham số cấu hình:

```typescript
import { toWords } from '@jofu/number-to-words';

const result = toWords.vi(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### Chuyển đổi số âm tiếng Việt

Thư viện hỗ trợ chuyển đổi số âm:

```typescript
const result = toWords.vi(-123);
console.log(result); // "âm một trăm hai mươi ba"
```

### Chuyển đổi số thập phân tiếng Việt

Thư viện hỗ trợ chuyển đổi số thập phân với các cấu hình tùy chỉnh:

```typescript
const result = toWords.vi(123.45);
console.log(result); // "một trăm hai mươi ba phẩy bốn mươi lăm"
```

### Chuyển đổi số nguyên thành chữ tiếng Anh

Để chuyển đổi một số nguyên thành chữ tiếng Anh, bạn chỉ cần gọi hàm `toWords.en` với số cần chuyển đổi và (tùy chọn) tham số cấu hình:

```typescript
const result = toWords.en(105);
console.log(result); // "one hundred and five"
```

### Chuyển đổi số thập phân tiếng Anh

Thư viện hỗ trợ chuyển đổi số thập phân tiếng Anh:

```typescript
const result = toWords.en(123.45);
console.log(result); // "one hundred and twenty-three point four five"
```

### Ví dụ đầy đủ

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

## Tham số của `toWords`

Hàm `toWords` có thể nhận tham số cấu hình bổ sung để tùy chỉnh cách đọc số. Cấu hình này được cung cấp dưới dạng đối tượng `VietnameseConfig` hoặc `EnglishConfig`, có thể tùy chỉnh như sau:

| Tham số  | Kiểu dữ liệu                        | Mô tả                                                                                                            | Mặc định   |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------- |
| `number` | `number`                            | Số cần chuyển đổi. Có thể là số nguyên, số âm, hoặc số thập phân.                                                | (Bắt buộc) |
| `config` | `VietnameseConfig \| EnglishConfig` | Cấu hình cho việc chuyển đổi số. Có thể là `VietnameseConfig` cho tiếng Việt hoặc `EnglishConfig` cho tiếng Anh. | (Bắt buộc) |

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

## Kết luận

Thư viện `@jofu/number-to-words` cung cấp một giải pháp đơn giản, hiệu quả và linh hoạt cho việc chuyển đổi các số thành chữ tiếng Việt và tiếng Anh. Đây là công cụ lý tưởng cho các ứng dụng cần thể hiện số liệu dưới dạng văn bản hoặc trong các giao diện người dùng.

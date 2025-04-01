# @jofu/number-to-words

Thư viện `@jofu/number-to-words` giúp chuyển đổi số thành chữ tiếng Việt một cách chính xác và linh hoạt. Thư viện hỗ trợ chuyển đổi các số nguyên, số thập phân, và số âm.

## Cài đặt

Để sử dụng thư viện, bạn có thể cài đặt qua npm hoặc yarn:

```bash
npm install @jofu/number-to-words
```

Hoặc:

```bash
yarn add @jofu/number-to-words
```

## Sử dụng

### Chuyển đổi số nguyên thành chữ

Để chuyển đổi một số nguyên thành chữ, bạn chỉ cần gọi hàm `numberToWords` với số cần chuyển đổi:

```typescript
import { numberToWords } from '@jofu/number-to-words';

const result = numberToWords(1234567);
console.log(result); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy"
```

### Chuyển đổi số âm

Hàm `numberToWords` hỗ trợ chuyển đổi số âm:

```typescript
const result = numberToWords(-123);
console.log(result); // "âm một trăm hai mươi ba"
```

### Chuyển đổi số thập phân

Thư viện hỗ trợ chuyển đổi số thập phân:

```typescript
const result = numberToWords(123.45);
console.log(result); // "một trăm hai mươi ba phẩy bốn mươi lăm"
```

## Ví dụ

```typescript
import { numberToWords } from '@jofu/number-to-words';

console.log(numberToWords(0)); // "không"
console.log(numberToWords(123)); // "một trăm hai mươi ba"
console.log(numberToWords(123.45)); // "một trăm hai mươi phẩy bốn lăm"
console.log(numberToWords(-123)); // "âm một trăm hai mươi ba"
console.log(numberToWords(1000)); // "một nghìn"
```

## Kết luận

Thư viện `@jofu/number-to-words` mang lại một giải pháp đơn giản, hiệu quả và linh hoạt cho việc chuyển đổi số thành chữ tiếng Việt. Đây là công cụ hữu ích cho các ứng dụng cần thể hiện số liệu dưới dạng văn bản hoặc trong các giao diện người dùng.

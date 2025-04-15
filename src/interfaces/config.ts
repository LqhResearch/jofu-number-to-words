export interface VietnameseConfig {
    decimalSeparator?: 'phẩy' | 'chấm';
    fractionalPrefix?: 'linh' | 'lẻ';
    useThousandsSeparator?: boolean;
}

export interface EnglishConfig {
    useThousandsSeparator?: boolean;
    point?: string;
    and?: string;
}

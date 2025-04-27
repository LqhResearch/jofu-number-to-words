export interface VietnameseConfig {
    decimalSeparator?: 'phẩy' | 'chấm';
    fractionalPrefix?: 'linh' | 'lẻ';
    useThousandsSeparator?: boolean;
}

export interface EnglishConfig {
    point?: string;
    and?: string;
    useThousandsSeparator?: boolean;
}

export interface ChineseConfig {
    decimalSeparator?: string;
    useTraditional?: boolean;
}

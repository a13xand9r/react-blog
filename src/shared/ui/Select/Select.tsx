import { ChangeEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/lib/typedMemo/typedMemo';

import styles from './Select.module.scss';

export interface SelectOption<T = string> {
    value: T;
    content: string;
}

interface SelectProps<T> {
    className?: string;
    label?: string;
    onChange?: (value: T) => void;
    options: SelectOption<T>[];
    value?: T;
    readOnly?: boolean;
}

export const Select = typedMemo(
    <T extends string>({
        label,
        onChange,
        options,
        value,
        readOnly,
        className,
    }: SelectProps<T>) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value as T);
            }
        };

        return (
            <div className={classNames(className, styles.Wrapper)}>
                {label && <span className={styles.label}>{`${label}>`}</span>}
                <select
                    className={styles.select}
                    disabled={readOnly}
                    onChange={onChangeHandler}
                    value={value}
                >
                    {options.map((opt) => (
                        <option className={styles.option} key={opt.value} value={opt.value}>
                            {opt.content}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

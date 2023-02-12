import { ChangeEvent, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    onChange?: (value: string) => void;
    options: SelectOption[];
    value?: string;
    readOnly?: boolean;
}

export const Select: FC<SelectProps> = memo(
    ({ label, onChange, options, value, readOnly, className }) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            if (onChange) {
                onChange(e.target.value);
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
                    {options.map(opt => (
                        <option
                            className={styles.option}
                            key={opt.value}
                            value={opt.value}
                        >
                            {opt.content}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
);

import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

const LETTER_WIDTH = 9.6;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'> {
    className?: string;
    onChange: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
};

export const Input: VFC<InputProps> = memo(({ className, onChange, value, placeholder, autofocus, readOnly, ...otherProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const isShowCaret = isFocused && !readOnly;

    return (
        <div className={classNames(className, styles.InputWrapper)}>
            {placeholder
                ? <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>
                : null}
            <div className={styles.caretWrapper}>
                <input
                    {...otherProps}
                    ref={inputRef}
                    onBlur={onBlur}
                    readOnly={readOnly}
                    onFocus={onFocus}
                    className={styles.input}
                    onChange={onChangeHandler}
                    value={value}
                    onSelect={onSelect}
                />
                {isShowCaret ? <span style={{ left: `${caretPosition * LETTER_WIDTH}px` }} className={styles.caret} /> : null}
            </div>
        </div>
    );
});

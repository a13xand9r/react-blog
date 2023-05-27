import { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Listbox.module.scss';
import DownIcon from 'shared/assets/icons/down-arrow.svg';
import CheckIcon from 'shared/assets/icons/check-mark.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';
import { typedMemo } from 'shared/lib/typedMemo/typedMemo';

export interface ListboxOption<T> {
    value: T;
    content: string;
    disabled?: boolean;
}

interface ListboxProps<T> {
    readOnly?: boolean;
    label?: string;
    value?: T;
    defaultValue?: T;
    options: ListboxOption<T>[];
    onChange: (value: T) => void;
}

export const Listbox = typedMemo(
    <T extends string>({
        options,
        value,
        defaultValue,
        readOnly,
        label,
        onChange,
    }: ListboxProps<T>) => {
        const currentContent = (
            options.find(opt => opt.value === value) ??
            options.find(opt => opt.value === defaultValue)
        )?.content;

        return (
            <HStack>
                {label && <span>{`${label}>`}</span>}
                <HListbox
                    disabled={readOnly}
                    className={styles.Listbox}
                    as="div"
                    value={value ?? defaultValue}
                    onChange={onChange}
                >
                    <HListbox.Button as="div" className={styles.buttonContainer}>
                        <Button
                            disabled={readOnly}
                            className={styles.button}
                            theme={ButtonTheme.OUTLINED}
                        >
                            {currentContent}
                            <Icon
                                className={styles.arrowIcon}
                                SvgIcon={DownIcon}
                                width={11}
                                height={11}
                            />
                        </Button>
                    </HListbox.Button>
                    <HListbox.Options className={styles.options}>
                        {options.map(option => (
                            <HListbox.Option
                                as={Fragment}
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {({ active, selected, disabled }) => (
                                    <li
                                        className={classNames(styles.option, {
                                            [styles.activeOption]: active,
                                            [styles.disabledOption]: disabled,
                                        })}
                                    >
                                        {selected && (
                                            <Icon
                                                className={styles.activeIcon}
                                                SvgIcon={CheckIcon}
                                                width={10}
                                                height={10}
                                            />
                                        )}
                                        {option.content}
                                    </li>
                                )}
                            </HListbox.Option>
                        ))}
                    </HListbox.Options>
                </HListbox>
            </HStack>
        );
    }
);

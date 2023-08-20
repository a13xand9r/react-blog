import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/typedMemo/typedMemo';

import { Card } from '../Card/Card';

import styles from './Tabs.module.scss';

export interface TabType<T = string> {
    value: T;
    text: string;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabType<T>[];
    value: T;
    onChange: (value: T) => void;
}

export const Tabs = typedMemo(
    <T extends string>({ tabs, onChange, value, className }: TabsProps<T>) => {
        const onClick = (value: T) => () => {
            onChange(value);
        };

        return (
            <div className={classNames(className, styles.Tabs)}>
                {tabs.map((tab) => (
                    <Card
                        key={tab.value}
                        onClick={onClick(tab.value)}
                        className={classNames(styles.tab, { [styles.active]: tab.value === value })}
                    >
                        {tab.text}
                    </Card>
                ))}
            </div>
        );
    }
);

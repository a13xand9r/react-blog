import { FC } from 'react';
import styles from './Flex.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type JustifyContent = 'start' | 'end' | 'center' | 'between';
type AlignItems = 'start' | 'end' | 'center';
type Direction = 'column' | 'row';
type Gap = '0' | '4' | '8' | '12' | '16' | '24' | '32';

export interface FlexProps {
    direction: Direction;
    justify?: JustifyContent;
    align?: AlignItems;
    gap?: Gap;
    fullWidth?: boolean;
    className?: string;
}

const justifyContentMap: Record<JustifyContent, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignItemsMap: Record<AlignItems, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const gapMap: Record<Gap, string> = {
    '0': styles.gap0,
    '4': styles.gap4,
    '8': styles.gap8,
    '12': styles.gap12,
    '16': styles.gap16,
    '24': styles.gap24,
    '32': styles.gap32,
};

export const Flex: FC<FlexProps> = ({
    direction,
    justify = 'start',
    align = 'center',
    gap = '0',
    fullWidth,
    className,
    children,
}) => {
    return (
        <div
            className={classNames(
                className,
                styles.Flex,
                styles[direction],
                justifyContentMap[justify],
                alignItemsMap[align],
                gapMap[gap],
                { [styles.width100]: fullWidth }
            )}
        >
            {children}
        </div>
    );
};

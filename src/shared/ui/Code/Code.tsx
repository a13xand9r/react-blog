import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';

import { Button, ButtonTheme } from '../Button/Button';

import styles from './Code.module.scss';

interface CodeProps {
    text: string;
    className?: string;
}

export const Code: FC<CodeProps> = memo(({ text, className }) => {
    const onCopy = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <pre className={classNames(className, styles.Code)}>
            <Button theme={ButtonTheme.CLEAR} onClick={onCopy} className={styles.copyBtn}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});

import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code/Code';

import { ArticleCodeBlockType } from '../../model/types/article';

import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    codeBlock: ArticleCodeBlockType;
    className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ codeBlock, className }) => {
    return (
        <Code text={codeBlock.code} className={classNames(className, styles.ArticleCodeBlock)} />
    );
};

import { FC } from 'react';
import styles from './ArticleCodeBlock.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlockType } from '../../model/types/article';

interface ArticleCodeBlockProps {
    codeBlock: ArticleCodeBlockType;
    className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ codeBlock, className }) => {
    return (
        <Code text={codeBlock.code} className={classNames(className, styles.ArticleCodeBlock)} />
    );
};

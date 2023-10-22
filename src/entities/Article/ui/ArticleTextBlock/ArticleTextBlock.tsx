import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';

import { ArticleTextBlockType } from '../../model/types/article';

import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    textBlock: ArticleTextBlockType;
    className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, textBlock }) => {
    return (
        <div className={classNames(className, styles.ArticleTextBlock)}>
            {textBlock.title && <Title className={styles.title}>{textBlock.title}</Title>}
            {textBlock.paragraphs.map((par) => (
                <Text className={styles.paragraph} key={par}>
                    {par}
                </Text>
            ))}
        </div>
    );
};

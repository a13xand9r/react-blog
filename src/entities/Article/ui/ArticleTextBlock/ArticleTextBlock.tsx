import { FC } from 'react';
import styles from './ArticleTextBlock.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlockType } from 'entities/Article/model/types/Article';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockProps {
    textBlock: ArticleTextBlockType;
    className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, textBlock }) => {
    return (
        <div className={classNames(className, styles.ArticleTextBlock)}>
            {textBlock.title && <Title className={styles.title}>{textBlock.title}</Title>}
            {textBlock.paragraphs.map(par => (
                <Text className={styles.paragraph} key={par}>
                    {par}
                </Text>
            ))}
        </div>
    );
};

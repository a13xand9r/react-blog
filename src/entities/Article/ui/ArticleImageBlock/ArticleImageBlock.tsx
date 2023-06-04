import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Title } from 'shared/ui/Title/Title';

import { ArticleImageBlockType } from '../../model/types/article';

import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    imageBlock: ArticleImageBlockType;
    className?: string;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ imageBlock, className }) => {
    return (
        <div className={classNames(className, styles.ArticleImageBlock)}>
            <img src={imageBlock.src} alt={imageBlock.title} />
            {imageBlock.title && <Title size="s">{imageBlock.title}</Title>}
        </div>
    );
};

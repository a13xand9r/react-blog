import { FC } from 'react';
import styles from './ArticleImageBlock.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlockType } from '../../model/types/article';
import { Title } from 'shared/ui/Title/Title';

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

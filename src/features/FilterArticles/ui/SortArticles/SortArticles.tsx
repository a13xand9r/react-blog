import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import {
    ArticleSortField,
    ArticleSortOrder,
} from 'features/FilterArticles/model/types/filterArticles';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesFilterSortByField,
    getArticlesFilterSortOrder,
} from '../../model/selectors/getFilters';
import { filterArticlesActions } from 'features/FilterArticles/model/slice/filterArticlesSlice';
import styles from './SortArticles.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SortArticlesProps {
    className?: string;
    onChange: () => void;
}

export const SortArticles: FC<SortArticlesProps> = ({ className, onChange }) => {
    const { t } = useTranslation('articlesPage');
    const dispatch = useAppDispatch();
    const fieldValue = useSelector(getArticlesFilterSortByField);
    const orderValue = useSelector(getArticlesFilterSortOrder);

    const fieldSortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                content: t('creation date'),
                value: 'createdAt',
            },
            {
                content: t('title'),
                value: 'title',
            },
            {
                content: t('views'),
                value: 'views',
            },
        ],
        [t]
    );
    const orderSortOptions = useMemo<SelectOption<ArticleSortOrder>[]>(
        () => [
            {
                content: t('increase'),
                value: 'asc',
            },
            {
                content: t('decrease'),
                value: 'desc',
            },
        ],
        [t]
    );

    const onSortFieldChange = useCallback(
        (value: ArticleSortField) => {
            dispatch(filterArticlesActions.setSortByField(value));
            onChange();
        },
        [dispatch, onChange]
    );

    const onSortOrderChange = useCallback(
        (value: ArticleSortOrder) => {
            dispatch(filterArticlesActions.setSortOrder(value));
            onChange();
        },
        [dispatch, onChange]
    );

    return (
        <div className={classNames(styles.SortArticles, className)}>
            <Select
                label={t('Sort by')}
                options={fieldSortOptions}
                value={fieldValue}
                onChange={onSortFieldChange}
            />
            <Select
                label={t('by')}
                options={orderSortOptions}
                value={orderValue}
                onChange={onSortOrderChange}
            />
        </div>
    );
};

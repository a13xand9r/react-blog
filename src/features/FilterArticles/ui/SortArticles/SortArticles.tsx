import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Listbox, ListboxOption } from '@/shared/ui/Popups';

import { ArticleSortField, ArticleSortOrder } from '../../model/types/filterArticles';
import {
    getArticlesFilterSortByField,
    getArticlesFilterSortOrder,
} from '../../model/selectors/getFilters';
import { filterArticlesActions } from '../../model/slice/filterArticlesSlice';

import styles from './SortArticles.module.scss';

interface SortArticlesProps {
    className?: string;
    onChange: () => void;
}

export const SortArticles: FC<SortArticlesProps> = ({ className, onChange }) => {
    const { t } = useTranslation('articlesPage');
    const dispatch = useAppDispatch();
    const fieldValue = useSelector(getArticlesFilterSortByField);
    const orderValue = useSelector(getArticlesFilterSortOrder);

    const fieldSortOptions = useMemo<ListboxOption<ArticleSortField>[]>(
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
    const orderSortOptions = useMemo<ListboxOption<ArticleSortOrder>[]>(
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
            <Listbox
                label={t('Sort by')}
                options={fieldSortOptions}
                value={fieldValue}
                onChange={onSortFieldChange}
            />
            <Listbox
                label={t('by')}
                options={orderSortOptions}
                value={orderValue}
                onChange={onSortOrderChange}
            />
        </div>
    );
};

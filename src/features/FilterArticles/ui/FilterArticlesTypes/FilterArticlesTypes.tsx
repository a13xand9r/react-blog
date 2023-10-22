import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { TabType, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { filterArticlesActions } from '../../model/slice/filterArticlesSlice';
import { getArticlesFilterTabValue } from '../../model/selectors/getFilters';

interface FilterArticlesTypesProps {
    className?: string;
    onChange: () => void;
}

export const FilterArticlesTypes: FC<FilterArticlesTypesProps> = ({ onChange, className }) => {
    const { t } = useTranslation('articlesPage');
    const dispatch = useAppDispatch();
    const value = useSelector(getArticlesFilterTabValue);

    const tabs = useMemo<TabType<ArticleType>[]>(
        () => [
            {
                text: t('All'),
                value: 'ALL',
            },
            {
                text: t('Economics'),
                value: 'ECONOMICS',
            },
            {
                text: t('IT'),
                value: 'IT',
            },
            {
                text: t('Science'),
                value: 'SCIENCE',
            },
        ],
        [t]
    );
    const onTabChange = useCallback(
        (value: ArticleType) => {
            dispatch(filterArticlesActions.setTypeFiler(value));
            onChange();
        },
        [dispatch, onChange]
    );

    return <Tabs className={className} tabs={tabs} onChange={onTabChange} value={value} />;
};

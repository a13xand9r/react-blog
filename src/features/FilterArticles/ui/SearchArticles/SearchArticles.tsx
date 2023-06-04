import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/lib/hooks/useDebounce';

import { filterArticlesActions } from '../../model/slice/filterArticlesSlice';
import { getArticlesFilterSearchText } from '../../model/selectors/getFilters';

interface SearchArticlesProps {
    className?: string;
    onChange: () => void;
}

export const SearchArticles: FC<SearchArticlesProps> = ({ className, onChange }) => {
    const { t } = useTranslation('articlesPage');
    const dispatch = useAppDispatch();
    const currentValue = useSelector(getArticlesFilterSearchText);

    const onChangeDebounced = useDebounce(onChange, 500);

    const onTextChange = useCallback(
        (value: string) => {
            dispatch(filterArticlesActions.setSearchText(value));
            onChangeDebounced();
        },
        [dispatch, onChangeDebounced]
    );

    return (
        <Input
            value={currentValue}
            placeholder={t('Search')}
            onChange={onTextChange}
            className={className}
        />
    );
};

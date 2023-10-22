import { VFC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';

import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: VFC = () => {
    const dispatch = useAppDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h2 data-testid="counter-value">{value}</h2>
            <Button onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};

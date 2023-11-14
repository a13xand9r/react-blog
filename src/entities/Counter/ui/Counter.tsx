import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from '@/shared/ui/Button';

import { getCounterValue } from '../model/selectors/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
    const { increment, decrement } = useCounterActions();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };
    return (
        <div>
            <h2 data-testid="counter-value">{value}</h2>
            <Button onClick={incrementHandler} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrementHandler} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};

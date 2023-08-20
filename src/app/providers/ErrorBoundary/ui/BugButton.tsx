import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования
export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('ThrowError')}</Button>;
};

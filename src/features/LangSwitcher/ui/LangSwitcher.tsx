import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
    buttonTheme?: ButtonTheme;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short = false, buttonTheme = ButtonTheme.CLEAR }) => {
        const { t, i18n } = useTranslation();

        const toggleLang = () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button className={className} onClick={toggleLang} theme={buttonTheme}>
                {!short ? t('Lang') : t('Short Lang')}
            </Button>
        );
    }
);

import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage: FC = memo(() => {
    const { t } = useTranslation('mainPage');
    return (
        <Page
            className={classNames(
                'mainClass',
                { falseClass: false, trueClass: true },
                { otherTrue: 'true' }
            )}
        >
            {t('Main page')}
        </Page>
    );
});

export default MainPage;

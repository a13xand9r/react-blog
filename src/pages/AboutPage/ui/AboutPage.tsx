import { useTranslation } from 'react-i18next';

import { Counter, counterReducer } from '@/entities/Counter';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    useDynamicReducerLoader('counter', counterReducer);

    return (
        <Page dataTestid="AboutPage">
            {t('AboutPage')}
            <Counter />
        </Page>
    );
}

export default AboutPage;

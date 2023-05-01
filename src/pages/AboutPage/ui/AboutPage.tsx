import { Counter } from 'entities/Counter';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { useTranslation } from 'react-i18next';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { Page } from 'widgets/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    useDynamicReducerLoader('counter', counterReducer);

    return (
        <Page>
            {t('AboutPage')}
            <Counter />
        </Page>
    );
}

export default AboutPage;

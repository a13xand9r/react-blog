import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    return (
        <Page>
            {t('AboutPage')}
            <Counter />
        </Page>
    );
}

export default AboutPage;

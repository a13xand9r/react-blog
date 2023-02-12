import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    return (
        <div>
            {t('AboutPage')}
            <Counter />
        </div>
    );
}

export default AboutPage;

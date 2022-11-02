import { useTranslation } from 'react-i18next';

function AboutPage () {
    const { t } = useTranslation('aboutPage');
    return (
        <div>
            {t('AboutPage')}
        </div>
    );
}

export default AboutPage;

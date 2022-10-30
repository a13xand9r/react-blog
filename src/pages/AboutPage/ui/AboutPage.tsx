import { useTranslation } from 'react-i18next';

function AboutPage () {
    const { t } = useTranslation();
    return (
        <div>{t('AboutPage')}</div>
    );
}

export default AboutPage;

import { FC, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileLoading } from '../../model/selectors/getProfileLoading';
import { Loader } from 'widgets/Loader';
import { Input } from 'shared/ui/Input/Input';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/consts/common';
import { getProfileFormValidateError } from 'entities/Profile/model/selectors/getProfileFormValidateError';
import { ValidateError } from 'entities/Profile/model/types/profileSchema';

interface ProfileCardProps {
    className?: string;
}

interface CurrencyOption {
    content: Currency;
    value: Currency;
}

const currencyOptions: CurrencyOption[] = [
    {
        content: 'RUB',
        value: 'RUB',
    },
    {
        content: 'USD',
        value: 'USD',
    },
    {
        content: 'EUR',
        value: 'EUR',
    },
];

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profilePage');
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileFormValidateError);
    const loading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const [isFirstInputFocused, setIsFirstInputFocused] = useState(false);

    const changeName = useCallback(
        value => {
            dispatch(profileActions.updateForm({ first: value }));
        },
        [dispatch]
    );
    const changeLastname = useCallback(
        value => {
            dispatch(profileActions.updateForm({ lastname: value }));
        },
        [dispatch]
    );
    const changeAge = useCallback(
        value => {
            dispatch(profileActions.updateForm({ age: value }));
        },
        [dispatch]
    );
    const changeCity = useCallback(
        value => {
            dispatch(profileActions.updateForm({ city: value }));
        },
        [dispatch]
    );
    const changeCurrency = useCallback(
        value => {
            dispatch(profileActions.updateForm({ currency: value }));
        },
        [dispatch]
    );

    useEffect(() => {
        if (!readOnly) {
            setIsFirstInputFocused(true);
        }
    }, [readOnly]);

    let content = (
        <>
            <Avatar src={data?.avatar} />
            <Input
                autofocus={isFirstInputFocused}
                readOnly={readOnly}
                className={styles.input}
                placeholder={t('Your name')}
                value={data?.first}
                onChange={changeName}
            />
            <Input
                readOnly={readOnly}
                className={styles.input}
                placeholder={t('Your lastname')}
                value={data?.lastname}
                onChange={changeLastname}
            />
            <Input
                readOnly={readOnly}
                className={styles.input}
                placeholder={t('Age')}
                value={data?.age}
                onChange={changeAge}
            />
            <Input
                readOnly={readOnly}
                className={styles.input}
                placeholder={t('City')}
                value={data?.city}
                onChange={changeCity}
            />
            <Select
                readOnly={readOnly}
                className={styles.input}
                value={data?.currency}
                label="Валюта"
                onChange={changeCurrency}
                options={currencyOptions}
            />
        </>
    );

    if (loading) {
        return <Loader />;
    }
    if (error) {
        content = (
            <Title center theme={TitleTheme.ERROR}>
                {error}
            </Title>
        );
    }

    const validateErrorsTranslation: Record<ValidateError, string> = {
        NAME_ERROR: t('Name is required'),
        USERNAME_ERROR: t('Username is required'),
        AGE_ERROR: t('Age is required'),
        COUNTRY_ERROR: t('Country is required'),
        FORM_DATA_ERROR: t('Some error'),
        SERVER_ERROR: t('Some server error'),
    };

    return (
        <div
            className={classNames(className, styles.ProfileCard, {
                [styles.editMode]: !readOnly,
            })}
        >
            {validateErrors?.map(err => (
                <Text key={err} theme={TextTheme.ERROR}>
                    {validateErrorsTranslation[err]}
                </Text>
            ))}
            {content}
        </div>
    );
};

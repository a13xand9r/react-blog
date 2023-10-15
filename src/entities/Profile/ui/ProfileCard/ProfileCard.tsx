import { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Currency } from '@/shared/consts/common';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Listbox } from '@/shared/ui/Popups';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Title, TitleTheme } from '@/shared/ui/Title/Title';
import { Loader } from '@/shared/ui/Loader';

import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm';
import { getProfileFormValidateError } from '../../model/selectors/getProfileFormValidateError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateError } from '../../model/types/profileSchema';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    id: string;
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

export const ProfileCard: FC<ProfileCardProps> = ({ id, className }) => {
    const { t } = useTranslation('profilePage');
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileFormValidateError);
    const loading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const [isFirstInputFocused, setIsFirstInputFocused] = useState(false);

    useDynamicReducerLoader('profile', profileReducer);
    useEffect(() => {
        if (id && __PROJECT__ !== 'test') {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    const changeName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateForm({ first: value }));
        },
        [dispatch]
    );
    const changeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateForm({ lastname: value }));
        },
        [dispatch]
    );
    const changeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.updateForm({ age: +value }));
        },
        [dispatch]
    );
    const changeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateForm({ city: value }));
        },
        [dispatch]
    );
    const changeCurrency = useCallback(
        (value: Currency) => {
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
                placeholder={t('Your name')}
                value={data?.first}
                onChange={changeName}
                data-testid="EditableProfileCard.firstInput"
            />
            <Input
                readOnly={readOnly}
                placeholder={t('Your lastname')}
                value={data?.lastname}
                onChange={changeLastname}
                data-testid="EditableProfileCard.lastnameInput"
            />
            <Input
                readOnly={readOnly}
                placeholder={t('Age')}
                value={data?.age}
                onChange={changeAge}
                type="number"
            />
            <Input
                readOnly={readOnly}
                placeholder={t('City')}
                value={data?.city}
                onChange={changeCity}
            />
            <Listbox
                readOnly={readOnly}
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
        <VStack
            align="start"
            gap="4"
            className={classNames(className, styles.ProfileCard, {
                [styles.editMode]: !readOnly,
            })}
        >
            {validateErrors?.map((err) => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    data-testid="EditableProfileCard.errorTitle"
                >
                    {validateErrorsTranslation[err]}
                </Text>
            ))}
            {content}
        </VStack>
    );
};

import { FC, FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Title } from '@/shared/ui/Title';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useDynamicReducerLoader('login', loginReducer);

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.changeUsername(value));
        },
        [dispatch]
    );

    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.changePassword(value));
        },
        [dispatch]
    );

    const submitForm = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const result = await dispatch(loginByUsername({ username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess?.();
            }
        },
        [dispatch, onSuccess, password, username]
    );

    return (
        <form onSubmit={submitForm} className={classNames(className, styles.LoginForm)}>
            <Title>{t('Authorization form')}</Title>
            {error && <Text theme={TextTheme.ERROR}>{t(error)}</Text>}
            <Input
                type="text"
                placeholder={t('Enter login')}
                value={username}
                onChange={onUsernameChange}
                autofocus
                maxLength={25}
            />
            <Input
                type="text"
                placeholder={t('Enter Password')}
                value={password}
                onChange={onPasswordChange}
                maxLength={30}
            />
            <Button
                theme={ButtonTheme.OUTLINED}
                type="submit"
                className={styles.loginBtn}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </form>
    );
};

export default LoginForm;

import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { FC, FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Title } from 'shared/ui/Title/Title';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import styles from './LoginForm.module.scss';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

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

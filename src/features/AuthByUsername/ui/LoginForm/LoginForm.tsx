import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { FC, FormEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Title } from 'shared/ui/Title/Title';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.changeUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.changePassword(value));
    }, [dispatch]);

    const submitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <form onSubmit={submitForm} className={classNames(className, styles.LoginForm)}>
            <Title>{t('Authorization form')}</Title>
            {error && <div>{t(error)}</div>}
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
            <Button theme={ButtonTheme.OUTLINED} type='submit' className={styles.loginBtn} disabled={isLoading}>
                {t('Login')}
            </Button>
        </form>
    );
};

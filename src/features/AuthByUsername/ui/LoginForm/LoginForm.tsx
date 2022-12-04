import { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation();

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={submitForm} className={classNames(className, styles.LoginForm)}>
            <Input
                type="text"
                placeholder={t('Enter login')}
                value={username}
                onChange={setUsername}
                autofocus
                maxLength={25}
            />
            <Input
                type="text"
                placeholder={t('Enter Password')}
                value={password}
                onChange={setPassword}
                maxLength={30}
            />
            <Button theme={ButtonTheme.OUTLINED} type='submit' className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </form>
    );
};

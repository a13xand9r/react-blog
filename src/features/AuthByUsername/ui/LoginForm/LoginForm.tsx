import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation();

    return (
        <form className={classNames(className, styles.LoginForm)}>
            <input type="text" placeholder='Логин' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type='submit'>
                {t('Login')}
            </Button>
        </form>
    );
};

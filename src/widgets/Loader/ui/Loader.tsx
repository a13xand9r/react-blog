import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
};

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={classNames(className, styles.Loader)}>
            <Spinner />
        </div>
    );
};

import { FC } from 'react';
import styles from './ArticlesViewSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCardView } from 'entities/Article';
import GridIcon from 'shared/assets/icons/grid-icon.svg';
import ListIcon from 'shared/assets/icons/list-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticlesViewSelectorProps {
    className?: string;
    currentView: ArticleCardView;
    onChangeView: (view: ArticleCardView) => void;
}

const viewTypes = [
    {
        view: 'SMALL',
        icon: GridIcon,
    },
    {
        view: 'BIG',
        icon: ListIcon,
    },
] as const;

export const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = ({
    onChangeView,
    currentView,
    className,
}) => {
    const onClick = (view: ArticleCardView) => () => onChangeView(view);
    return (
        <div className={classNames(className, styles.ArticlesViewSelector)}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames(className, styles.ArticlesViewSelector, {
                            [styles.notSelected]: currentView !== viewType.view,
                        })}
                        SvgIcon={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};

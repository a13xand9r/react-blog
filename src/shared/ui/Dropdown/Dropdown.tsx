import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import styles from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';
import { Button, ButtonTheme } from '../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownPosition } from 'shared/types/ui';

export interface DropdownItem {
    content: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

interface DropdownProps {
    items: DropdownItem[];
    buttonElement: ReactNode;
    position?: DropdownPosition;
}

const positionMapper: Record<DropdownPosition, string> = {
    'top right': styles.topRight,
    'top left': styles.topLeft,
    'bottom right': styles.bottomRight,
    'bottom left': styles.bottomLeft,
};

export const Dropdown: FC<DropdownProps> = ({
    items,
    buttonElement,
    position = 'bottom right',
}) => {
    const positionClassName = positionMapper[position];

    return (
        <Menu as="div" className={styles.Dropdown}>
            <Menu.Button className={styles.btn}>{buttonElement}</Menu.Button>
            <Menu.Items className={classNames(styles.items, positionClassName)}>
                {items.map((item) => {
                    const content = ({ active }: { active?: boolean }) => (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={item.onClick}
                            className={classNames(styles.itemBtn, { [styles.activeItem]: active })}
                        >
                            {item.content}
                        </Button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                disabled={item.disabled}
                                as={AppLink}
                                to={item.href}
                                key={item.content}
                                onClick={item.onClick}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item disabled={item.disabled} as={Fragment} key={item.content}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

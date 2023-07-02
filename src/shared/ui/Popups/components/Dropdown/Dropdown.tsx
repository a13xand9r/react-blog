import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownPosition } from 'shared/types/ui';

import { AppLink } from '../../../AppLink/AppLink';
import { Button, ButtonTheme } from '../../../Button/Button';
import { positionMapper } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.scss';

import styles from './Dropdown.module.scss';

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

export const Dropdown: FC<DropdownProps> = ({
    items,
    buttonElement,
    position = 'bottom right',
}) => {
    const positionClassName = positionMapper[position];

    return (
        <Menu as="div" className={classNames(styles.Dropdown, popupStyles.popup)}>
            <Menu.Button className={popupStyles.triggerBtn}>{buttonElement}</Menu.Button>
            <Menu.Items className={classNames(styles.items, positionClassName)}>
                {items.map((item) => {
                    const content = ({ active }: { active?: boolean }) => (
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={item.onClick}
                            className={classNames(styles.itemBtn, {
                                [popupStyles.activeItem]: active,
                            })}
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

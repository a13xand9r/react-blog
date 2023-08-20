import { DropdownPosition } from '@/shared/types/ui';

import styles from './popup.module.scss';

export const positionMapper: Record<DropdownPosition, string> = {
    'top right': styles.topRight,
    'top left': styles.topLeft,
    'bottom right': styles.bottomRight,
    'bottom left': styles.bottomLeft,
};

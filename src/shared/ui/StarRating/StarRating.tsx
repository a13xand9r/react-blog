import { FC, useCallback, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/start.svg';

import { HStack } from '../Stack';
import { Icon } from '../Icon/Icon';

import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSubmit: (idx: number) => void;
    initialRating?: number;
}

const stars = new Array(5).fill(undefined);

export const StarRating: FC<StarRatingProps> = ({ className, onSubmit, initialRating }) => {
    const [hoveredIdx, setHoveredIdx] = useState(0);
    const [selectedIdx, setSelectedIdx] = useState(0);

    const onStarHover = (idx: number) => () => {
        setHoveredIdx(idx);
    };
    const onRemoveHover = useCallback(() => {
        setHoveredIdx(0);
    }, []);
    const onSelectStar = (idx: number) => () => {
        !selectedIdx && setSelectedIdx(idx);
        onSubmit(idx);
    };

    useEffect(() => {
        initialRating && setSelectedIdx(initialRating);
    }, [initialRating]);

    return (
        <HStack
            onMouseLeave={onRemoveHover}
            gap="8"
            className={classNames(className, styles.StarRating)}
        >
            {stars.map((_, idx) => (
                <Icon
                    onMouseOver={onStarHover(idx + 1)}
                    onClick={onSelectStar(idx + 1)}
                    key={idx}
                    SvgIcon={StarIcon}
                    className={classNames(
                        styles.starIcon,
                        {
                            [styles.filled]: !selectedIdx ? idx < hoveredIdx : idx < selectedIdx,
                        },
                        {
                            [styles.selected]: !!selectedIdx,
                        }
                    )}
                />
            ))}
        </HStack>
    );
};

import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack: FC<HStackProps> = ({ className, children, ...otherProps }) => {
    return (
        <Flex {...otherProps} direction="row" className={className}>
            {children}
        </Flex>
    );
};

import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = ({ className, children, ...otherProps }) => {
    return (
        <Flex {...otherProps} direction="column" className={className}>
            {children}
        </Flex>
    );
};

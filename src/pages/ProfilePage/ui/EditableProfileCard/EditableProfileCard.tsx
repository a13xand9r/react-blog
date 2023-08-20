import { FC } from 'react';

import { ProfileCard } from '@/entities/Profile';
import { VStack } from '@/shared/ui/Stack';

import { ProfileHeader } from '../ProfileHeader/ProfileHeader';

interface EditableProfileCardProps {
    id: string;
    className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ id, className }) => {
    return (
        <VStack className={className} gap="12" align="start" fullWidth>
            <ProfileHeader id={id} />
            <ProfileCard id={id} />
        </VStack>
    );
};

import { FC } from 'react';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { ProfileCard } from 'entities/Profile';
import { VStack } from 'shared/ui/Stack';

interface EditableProfileCardProps {
    id: string;
    className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ id, className }) => {
    return (
        <VStack className={className} gap="12" align="start" fullWidth>
            <ProfileHeader />
            <ProfileCard id={id} />
        </VStack>
    );
};

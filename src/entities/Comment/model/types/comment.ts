import { User } from '@/entities/User';

export interface CommentType {
    user: User;
    id: string;
    text: string;
}

import { buildSelector } from '@/shared/store/buildSelector';

export const [useGetUserAuthData, getUserAuthData] = buildSelector((state) => state.user.authUser);

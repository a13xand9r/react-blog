import { buildSelector } from '@/shared/store/buildSelector';

export const [useGetProfileData, getProfileData] = buildSelector((state) => state.profile?.data);

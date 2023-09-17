import { getProfileData } from './model/selectors/getProfileData';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { profileActions } from './model/slice/profileSlice';
import { ProfileSchema } from './model/types/profileSchema';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { ProfileCard, getProfileData, getProfileReadOnly, updateProfileData, profileActions };
export type { ProfileSchema };

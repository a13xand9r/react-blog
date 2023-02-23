import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profileSchema';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { ProfileHeader } from './ui/ProfileHeader/ProfileHeader';

export { ProfileSchema, Profile, profileReducer, fetchProfileData, ProfileCard, ProfileHeader };

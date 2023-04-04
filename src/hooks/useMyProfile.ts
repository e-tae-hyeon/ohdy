import {useQuery} from '@tanstack/react-query';
import {getMyProfile} from 'apis/me';

function useMyProfile() {
  const {data: profile} = useQuery(['myProfile'], getMyProfile);

  return profile;
}

export default useMyProfile;

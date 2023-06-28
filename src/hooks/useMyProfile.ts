import {useQuery} from '@tanstack/react-query';
import {getMyProfile} from 'apis/me';

function useMyProfile() {
  const {data: profile, refetch} = useQuery(['myProfile'], getMyProfile, {
    enabled: false,
  });

  return {profile, refetch};
}

export default useMyProfile;

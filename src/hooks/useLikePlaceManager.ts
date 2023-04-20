import {likePlace, unlikePlace} from 'apis/places';
import {useCallback, useRef} from 'react';
import usePlaceOverrideStore from 'stores/usePlaceOverrideStore';

function useLikePlaceManager() {
  const set = usePlaceOverrideStore(store => store.set);
  const abortControllers = useRef(new Map<number, AbortController>()).current;

  const like = useCallback(
    async (placeId: number) => {
      const prevController = abortControllers.get(placeId);

      try {
        prevController?.abort();

        set({placeId, overridePlace: {isLiked: true}});
        const controller = new AbortController();
        abortControllers.set(placeId, controller);

        await likePlace(placeId, controller);

        abortControllers.delete(placeId);
      } catch (err) {
        // console.error(err);
      }
    },
    [abortControllers],
  );

  const unlike = useCallback(
    async (placeId: number) => {
      const prevController = abortControllers.get(placeId);

      try {
        prevController?.abort();

        set({placeId, overridePlace: {isLiked: false}});
        const controller = new AbortController();
        abortControllers.set(placeId, controller);

        await unlikePlace(placeId, controller);

        abortControllers.delete(placeId);
      } catch (err) {
        // console.error(err);
      }
    },
    [abortControllers],
  );

  return {like, unlike};
}

export default useLikePlaceManager;

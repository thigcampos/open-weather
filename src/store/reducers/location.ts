import { SearchData } from "../../api";
import { Action } from "../action.types";
import { LocationTypes } from "../actionTypes/location";

type LocationState = {
  favorites: Array<SearchData>;
};

const initialState: LocationState = {
  favorites: [],
};

export default (
  state = initialState,
  { type, payload }: Action<LocationTypes>
): LocationState => {
  switch (type) {
    case LocationTypes.SET_NEW_FAVORITE: {
      const currentFavorites = state.favorites;
      currentFavorites.push(payload.location);

      return {
        ...state,
        favorites: [...currentFavorites],
      };
    }

    case LocationTypes.SET_REMOVE_FAVORITE: {
      const currentFavorites = state.favorites;
      const newFavorites = currentFavorites.filter(
        (loc) => loc.name !== payload.location.name
      );

      return {
        ...state,
        favorites: [...newFavorites],
      };
    }

    default:
      return initialState;
  }
};

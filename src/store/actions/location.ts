import { SearchData } from "@/api";
import { Action } from "../action.types";
import { LocationTypes } from "../actionTypes/location";

export const setNewFavorite = (
  location: SearchData
): Action<LocationTypes> => ({
  type: LocationTypes.SET_NEW_FAVORITE,
  payload: {
    location,
  },
});

export const removeFavorite = (
  location: SearchData
): Action<LocationTypes> => ({
  type: LocationTypes.SET_REMOVE_FAVORITE,
  payload: {
    location,
  },
});

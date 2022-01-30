import { createStore, combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import locationReducer from "./reducers/location";

const locationPersistConfig = {
  key: "location",
  storage: AsyncStorage,
  whitelist: ["favorites"],
};

const reducers = combineReducers({
  location: persistReducer(locationPersistConfig, locationReducer),
});

const store = createStore(reducers);

export type StoreTypes = typeof store;

const persistor = persistStore(store);

export { store, persistor };

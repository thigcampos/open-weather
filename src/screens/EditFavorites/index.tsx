import React from "react";
import { Layout } from "@ui-kitten/components";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import CityCard from "./Elements";
import { SearchData } from "../../api";
import { StoreTypes } from "../../store";

export default function EditFavoritesScreen() {
  const keyExtractor = (item: SearchData, index: number) =>
    `${item.name + item.state + item.country + index}`;

  const location = useSelector<StoreTypes, SearchData>(
    (store) => store.location.favorites
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 16,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <FlatList
          data={location}
          renderItem={({ item }) => (
            <CityCard
              city={item.name}
              state={item.state}
              country={item.country}
            />
          )}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: "100%" }}
        />
      </Layout>
    </SafeAreaView>
  );
}

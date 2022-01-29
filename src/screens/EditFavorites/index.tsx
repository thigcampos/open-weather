import React from "react";
import { Layout } from "@ui-kitten/components";
import { FlatList, SafeAreaView } from "react-native";
import { Cities } from "../../utils";
import CityCard from "./Elements";

export default () => {
  const keyExtractor = (
    item: { name: string; country: string },
    index: number
  ) => `${item.name + item.country + index}`;
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
          data={Cities}
          renderItem={({ item }) => (
            <CityCard city={item.name} country={item.country} />
          )}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: "100%" }}
        />
      </Layout>
    </SafeAreaView>
  );
};

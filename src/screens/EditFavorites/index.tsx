import React from "react";
import { Layout } from "@ui-kitten/components";
import { FlatList, SafeAreaView } from "react-native";
import { Cities } from "../../utils";
import CityCard from "./Elements";

export default () => {
  const keyExtractor = (item: { title: string }, index: number) =>
    `${item.title + index}`;
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
          renderItem={({ item }) => <CityCard city={item.title} />}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: "100%" }}
        />
      </Layout>
    </SafeAreaView>
  );
};

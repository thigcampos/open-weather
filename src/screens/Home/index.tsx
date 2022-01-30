import React, { ReactElement } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { HomeCard, Empty } from "./Elements";
import { HomeScreenProps } from "./Home.types";
import { SearchData } from "../../api";
import { StoreTypes } from "../../store";

export default function HomeScreen({
  navigation: { navigate },
}: HomeScreenProps): ReactElement {
  const location = useSelector<StoreTypes, SearchData>(
    (store) => store.location.favorites
  );
  const goEditFavorites = (): void => {
    navigate("EditFavorites");
  };

  const keyExtractor = (item: SearchData, index: number) =>
    `${item.name + item.state + item.country + index}`;

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
        <Layout
          style={{
            width: "100%",
            height: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>OpenWeather</Text>
          <Button
            onPress={goEditFavorites}
            appearance='ghost'
            style={{ width: "10%", height: "100%" }}
          >
            <Icon name='edit-outline' height={32} width={32} fill='white' />
          </Button>
        </Layout>
        <FlatList
          data={location}
          renderItem={({ item }) => (
            <HomeCard
              city={item.name}
              country={item.country}
              lat={item.lat}
              lon={item.lon}
              onPress={() =>
                navigate("City", {
                  name: item.name,
                  lat: item.lat,
                  lon: item.lon,
                })
              }
            />
          )}
          ListEmptyComponent={<Empty />}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: "100%" }}
        />
      </Layout>
    </SafeAreaView>
  );
}

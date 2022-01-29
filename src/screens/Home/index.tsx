import React, { ReactElement } from "react";
import HomeCard from "./Elements";
import { FlatList, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import type {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";
import { Button, Icon, Layout, Spinner, Text } from "@ui-kitten/components";
import { Cities } from "../../utils/fakeList";

type HomeScreenProps = StackScreenProps<BottomTabNavigatorParamList, "Home"> &
  StackScreenProps<RootStackParamList>;

export default ({
  navigation: { navigate },
}: HomeScreenProps): ReactElement => {
  const goCity = (): void => {
    navigate("City");
  };
  const goEditFavorites = (): void => {
    navigate("EditFavorites");
  };
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
            appearance={"ghost"}
            style={{ width: "10%", height: "100%" }}
          >
            <Icon name='edit-outline' height={32} width={32} fill={"white"} />
          </Button>
        </Layout>
        <FlatList
          data={Cities}
          renderItem={({ item }) => (
            <HomeCard
              onPress={goCity}
              city={item.title}
              latitude={item.latitude}
              longitude={item.longitude}
            />
          )}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ maxWidth: "100%" }}
        />
      </Layout>
    </SafeAreaView>
  );
};

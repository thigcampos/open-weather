import * as React from "react";
import { SafeAreaView } from "react-native";
import { Layout, Input, Text } from "@ui-kitten/components";
import { ReactElement } from "react";
import {
  BottomTabNavigatorParamList,
  RootStackParamList,
} from "../../routes/routes.types";
import { StackScreenProps } from "@react-navigation/stack";

type SearchScreenProps = StackScreenProps<
  BottomTabNavigatorParamList,
  "Search"
> &
  StackScreenProps<RootStackParamList>;

export default ({
  navigation: { navigate },
}: SearchScreenProps): ReactElement => {
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buscar</Text>
        </Layout>
        <Input
          style={{ borderRadius: 14 }}
          placeholder='Pesquise uma cidade'
          size='large'
        />
      </Layout>
    </SafeAreaView>
  );
};

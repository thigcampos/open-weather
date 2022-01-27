import React, { ReactElement } from "react";
import { MainCard, MiniCard } from "../../components";
import { SafeAreaView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabNavigatorParamList, RootStackParamList } from "../../routes/routes.types";
import { Layout } from "@ui-kitten/components";


type HomeScreenProps = StackScreenProps<BottomTabNavigatorParamList, "Home"> &
  StackScreenProps<RootStackParamList>;

export default ({
  navigation: { navigate },
}: HomeScreenProps): ReactElement => {

  const handleGoCity = (): void => {
    navigate("City");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          padding: 24,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <MainCard onPress={handleGoCity}/>
                 <MiniCard onPress={handleGoCity}/>
 
        <MiniCard onPress={handleGoCity}/>
      </Layout>
    </SafeAreaView>
  );
}

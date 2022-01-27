import React, { ReactElement } from "react";
import { Container, MainCard, MiniCard } from "../../components";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabNavigatorParamList, RootStackParamList } from "../../routes/routes.types";


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
      <Container
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
      </Container>
    </SafeAreaView>
  );
}

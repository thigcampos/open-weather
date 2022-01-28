import * as React from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Layout, Icon } from "@ui-kitten/components";
import styled from "styled-components";
import Day from "./Elements";

const MiniTitle = styled(Text)`
  font-size: 10px;
  font-weight: 400;
`;

export default function CityScreen() {
  return (
    <Layout
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <ScrollView contentContainerStyle={{ maxWidth: "100%" }}>
        <Layout
          style={{
            flex: 1,
            padding: 24,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 110, height: 80 }}
              source={require("../../../assets/01d.png")}
            />
            <Text style={{ fontSize: 64, fontWeight: "bold" }}>25</Text>
            <Text>Ventando</Text>
          </View>
          <View
            style={{
              display: "flex",
              marginTop: 40,
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Icon
                fill='#fff'
                height='24px'
                width='24px'
                name='thermometer-minus-outline'
              />
              <Text>15</Text>
              <MiniTitle>Mínima</MiniTitle>
            </View>
            <View style={{ alignItems: "center" }}>
              <Icon
                fill='#fff'
                height='24px'
                width='24px'
                name='thermometer-plus-outline'
              />
              <Text>25</Text>
              <MiniTitle>Máxima</MiniTitle>
            </View>
            <View style={{ alignItems: "center" }}>
              <Icon
                fill='#fff'
                height='24px'
                width='24px'
                name='percent-outline'
              />
              <Text>75%</Text>
              <MiniTitle>Chuva</MiniTitle>
            </View>
          </View>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </Layout>
      </ScrollView>
    </Layout>
  );
}

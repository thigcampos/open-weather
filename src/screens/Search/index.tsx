import React, { ReactElement, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Layout, Input, Text } from "@ui-kitten/components";
import { ResultCard, Empty } from "./Elements";
import { SearchScreenProps } from "./Search.types";
import { SearchData, searchPlace } from "../../api";

export default function SearchScreen({
  navigation: { navigate },
}: SearchScreenProps): ReactElement {
  const [apiData, setApiData] = useState([]);

  const handleChange = (input: string) => {
    searchPlace(input).then(({ data }) => {
      setApiData(data);
    });
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pesquisa</Text>
        </Layout>
        <Input
          style={{ borderRadius: 14 }}
          placeholder='Pesquise uma cidade'
          size='large'
          onChangeText={(e) => handleChange(e)}
        />
        <Layout
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <FlatList
            keyboardShouldPersistTaps='always'
            data={apiData}
            focusable
            renderItem={({ item }) => (
              <ResultCard
                city={item.name}
                country={item.country}
                state={item.state || undefined}
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
            ListEmptyComponent={Empty}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ maxWidth: "100%" }}
          />
        </Layout>
      </Layout>
    </SafeAreaView>
  );
}

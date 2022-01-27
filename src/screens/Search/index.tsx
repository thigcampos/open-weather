import * as React from "react";
import { SafeAreaView } from "react-native";
import { Layout, Input } from "@ui-kitten/components";

export default function SearchScreen() {
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
        <Input
          style={{ borderRadius: 14 }}
          placeholder='Pesquise uma cidade'
          size='large'
        />
      </Layout>
    </SafeAreaView>
  );
}

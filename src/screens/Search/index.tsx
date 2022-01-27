import * as React from "react";
import { Container } from "../../components";
import { SafeAreaView } from "react-native";
import { Text, Layout, Input } from "@ui-kitten/components";

export default function SearchScreen() {
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
        <Layout
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: 24,
          }}
        >
          <Text style={{ marginTop: 24, fontSize: 24, fontWeight: "normal" }}>
            Buscar
          </Text>
        </Layout>
        <Input
          style={{ borderRadius: 14 }}
          placeholder='Pesquise uma cidade'
          size='large'
        />
      </Container>
    </SafeAreaView>
  );
}

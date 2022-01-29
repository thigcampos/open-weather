import * as React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import Config from "./Elements";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          padding: 16,
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Configurações
          </Text>
        </Layout>
        <Config subtitle='Tema do aplicativo' title='Modo Escuro' />
        <Config subtitle='Medida de Temperatura' title='Sistema Imperial' />
      </Layout>
    </SafeAreaView>
  );
};

import * as React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import Config from "./Elements";

export default function SettingsScreen() {
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
        <Config subtitle='Tema do aplicativo' title='Modo Escuro' />
        <Config subtitle='Medida de Temperatura' title='Sistema Imperial' />
      </Layout>
    </SafeAreaView>
  );
}

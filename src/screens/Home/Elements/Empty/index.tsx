import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default function Empty() {
  return (
    <Layout
      style={{
        flex: 1,
        minHeight: "90%",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 16, color: "gray" }}>
        Sua lista de cidades está vazia.
      </Text>
      <Text style={{ fontSize: 14, color: "gray", marginTop: 8 }}>
        Pesquise e adicione uma cidade à sua lista na aba de pesquisa
      </Text>
    </Layout>
  );
}

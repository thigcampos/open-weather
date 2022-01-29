import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default () => {
  return (
    <Layout
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
        Ops... Parece que a sua lista de cidades está vazia. Pesquise e adicione
        uma cidade à sua lista na aba de busca
      </Text>
    </Layout>
  );
};

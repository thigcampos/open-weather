import React from "react";
import { Text } from "@ui-kitten/components";

export default function Empty() {
  return (
    <Text
      style={{
        marginTop: 16,
        fontSize: 12,
        color: "gray",
      }}
    >
      Dica: a pesquisa segue o padrão cidade, estado, país
    </Text>
  );
}

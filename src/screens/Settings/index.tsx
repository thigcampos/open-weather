import * as React from "react";
import { Text } from "@ui-kitten/components";
import { Container } from "../../components";

export default function SettingsScreen() {
  return (
    <Container
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Settings!</Text>
    </Container>
  );
}

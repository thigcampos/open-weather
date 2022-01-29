import { ReactElement, useState } from "react";
import { Layout, Text, Toggle } from "@ui-kitten/components";
import { ConfigProps } from "../Settings.types";

export default function Config({ subtitle, title }: ConfigProps): ReactElement {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <Layout style={{ width: "100%", marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#C0C0C0",
          marginBottom: 12,
        }}
      >
        {subtitle}
      </Text>
      <Layout
        style={{
          backgroundColor: "#202020",
          borderRadius: 14,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <Text>{title}</Text>
        <Toggle checked={checked} onChange={onCheckedChange} />
      </Layout>
    </Layout>
  );
}

import { ReactElement } from "react";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";

type Props = {
  city: string;
};

export default function CityCard({ city }: Props): ReactElement {
  return (
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
        marginTop: 16,
      }}
    >
      <Text>{city}</Text>
      <Button appearance={"ghost"}>
        <Icon name='trash-2-outline' height={24} width={24} fill={"white"} />
      </Button>
    </Layout>
  );
}

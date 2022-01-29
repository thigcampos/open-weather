import { ReactElement } from "react";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { CityCardProps } from "../EditFavorites.types";

export default function CityCard({
  city,
  country,
}: CityCardProps): ReactElement {
  return (
    <Layout
      style={{
        padding: 16,
        minWidth: "100%",
        display: "flex",
        flexDirection: "row",
        height: 75,
        marginTop: 12,
        borderRadius: 14,
        alignItems: "center",
        backgroundColor: "#202020",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
        {city}, {country}
      </Text>
      <Button appearance={"ghost"}>
        <Icon name='trash-2-outline' height={24} width={24} fill={"white"} />
      </Button>
    </Layout>
  );
}

import { Layout, Text } from "@ui-kitten/components";
import { Image, View } from "react-native";

export default function Day() {
  return (
    <Layout
      style={{
        padding: 16,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderRadius: 14,
        height: 75,
        marginTop: 12,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#202020",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>Segunda</Text>
      <View
        style={{
          width: "40%",
          height: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>90</Text>
        <Image
          style={{ width: 55, height: 50 }}
          source={require("../../../../assets/01d.png")}
        />
      </View>
    </Layout>
  );
}

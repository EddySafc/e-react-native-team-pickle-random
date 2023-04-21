import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Team Pickle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    backgroundColor: "#BEA02B",
    marginBottom: 0,
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  header_text: {
    alignItems: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Header;

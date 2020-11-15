import React from "react";
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from "react-native";
import ProceedSvgIconCoponent from "./ProceedSvgIconCoponent";
import image from "../assets/favicon.png";

export default function FoodListComponent(props) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.categoryView}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/food-preview.png")}
            style={styles.categoryImage}
          />
  
          <View style={styles.categoryTextSection}>
            <Text style={styles.categoryText}>White Rice • NGN 35,000</Text>
            <Text style={styles.categorySubtext}>
              Fried Rice, Plantain, Coca Cola
            </Text>
          </View>
        </View>
  
        <ProceedSvgIconCoponent />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  categoryView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingBottom: 21,
        paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginRight: 12,
  },

  categoryText: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#0B0F32",
  },
  categorySubtext: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#0B0F32",
    opacity: 0.5,
  },
});

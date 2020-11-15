import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import FoodListComponent from "../components/FoodListComponent";
import NairaSymbolSvgComponent from "../components/NairaSymbolSvgComponent";
import ForwardIconComponent from "../components/ForwardIconComponent";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#5935D5"
        translucent={false}
        networkActivityIndicatorVisible={true}
      /> */}

      <View style={styles.jumbotron}>
        <Text style={styles.title}>Overview</Text>

        <View style={styles.balanceView}>
          <Text style={styles.balance}>Current Balance</Text>
        </View>

        <View style={styles.figureView}>
          <NairaSymbolSvgComponent />
          <Text style={styles.figureDigit}>234,000</Text>
          <Text style={styles.figureDigitUnit}>.00</Text>
        </View>

        <TouchableHighlight>
          <View style={styles.salesTouchableView}>
            <Text style={styles.salesTouchableText}>View Sales</Text>

            <ForwardIconComponent />
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 28,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View>
            <Text style={styles.subtitle}>Pending Orders</Text>
          </View>

          <TouchableWithoutFeedback>
            <View>
              <Text style={styles.viewAllNavigator}>View All</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <FoodListComponent />
        <View
          style={styles.hr}
        />

        <FoodListComponent />
        <View style={styles.hr} />

        <FoodListComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  jumbotron: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#5935D5",
    paddingTop: 18,
    paddingBottom: 29,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  balanceView: {
    backgroundColor: "#5030C0",
    borderRadius: 11.1034,
    marginTop: 25,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 14,
    paddingLeft: 14,
  },

  balance: {
    fontWeight: "600",
    fontSize: 9.19936,
    lineHeight: 11,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },

  figureView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4.79,
  },
  figureDigit: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 29,
    marginLeft: 2,
    color: "#FFFFFF",
  },
  figureDigitUnit: {
    alignSelf: "flex-end",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
    opacity: 0.7,
    paddingBottom: 5,
  },
  salesTouchableView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#613FD7",
    elevation: 1,
    borderRadius: 21,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 11,
    marginTop: 16,
  },
  salesTouchableText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#FFFFFF",
    marginRight: 12,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: "#130F49",
  },
  viewAllNavigator: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    // textAlign: "right",
    color: "#5935D5",
  },
  hr: {
    borderBottomColor: "#130F49",
    borderBottomWidth: 1,
    opacity: 0.05,
    marginLeft: 20,
    marginRight: 20,
  },
});

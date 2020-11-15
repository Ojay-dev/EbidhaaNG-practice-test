import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import LogoSvgComponent from "../components/LogoSvgComponent";

export default function Login({ navigation }) {
  const [emailValue, onChangeEmailText] = React.useState("");
  const [passwordValue, onChangePasswordText] = React.useState("");

  return (
    <View style={styles.container}>
      {/* <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#5935D5"
        translucent={false}
        networkActivityIndicatorVisible={true}
      /> */}

      <View style={styles.logoView}>
        <LogoSvgComponent />
      </View>

      <Text style={styles.title}>Login.</Text>
      <Text style={styles.subtitle}>Manage your food the best way</Text>

      <View>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onChangeEmailText(text)}
          value={emailValue}
          placeholder="ofada@buyfood.ng"
          placeholderTextColor={"rgba(19,15,73,0.45)"}
        />
      </View>

      <View style={{ marginTop: 21 }}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputField}
          secureTextEntry={true}
          onChangeText={(text) => onChangePasswordText(text)}
          value={passwordValue}
          placeholder="Password"
          placeholderTextColor={"rgba(19,15,73,0.45)"}
        />
        <TouchableWithoutFeedback>
          <Text style={styles.forgotPassText}>Forgot Password</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.buttonView}>
        <TouchableNativeFeedback
          // onPress={this._onPressButton}
          background={
            Platform.OS === "android"
              ? TouchableNativeFeedback.SelectableBackground()
              : ""
          }
          style={{
            border: "none",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <View style={styles.footerView}>
        <Text style={styles.footer}>New vendor? </Text>
        <TouchableWithoutFeedback style={styles.forgotPassText}>
          <Text style={styles.footerTouchable}>Request an account</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },

  logoView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 17,
  },

  title: {
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: 48,
    marginTop: 21,
    color: "#130F49",
  },

  subtitle: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 18,
    color: "#130F49",
    opacity: 0.5,
    marginBottom: 31,
  },

  inputLabel: {
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 16,
    color: "#130F49",
  },

  inputField: {
    fontWeight: "500",
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
    paddingTop: 18,
    paddingBottom: 18,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 4,
  },
  forgotPassText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    color: "#5935D5",
    marginTop: 9,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 32,
  },

  button: {
    backgroundColor: "#FFC44A",
    borderRadius: 5,
  },

  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 21,
    color: "#130F49",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 37,
    paddingLeft: 37,
  },
  footerView: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    bottom: 15,
    left: 0,
    width: "100%",
  },
  footer: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    color: "#130F49",
  },
  footerTouchable: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#5935D5",
  },
});

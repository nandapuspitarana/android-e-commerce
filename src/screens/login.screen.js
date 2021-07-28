import { Button, Input, Text } from "@ui-kitten/components";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "../components/3rd-party";
import { ImageOverlay } from "../components/image-overlay";
import {
  ArrowForwardIcon,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
} from "../components/icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignInButtonPress = () => {
    navigation && navigation.navigate("Home");
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp");
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("ForgotPassword");
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <KeyboardAvoidingView>
        <ImageOverlay
          style={styles.container}
          source={require("../../assets/image-background3.png")}>
          <View style={styles.signInContainer}>
            <Text style={styles.signInLabel} status='basic' category='h4'>
              SIGN IN
            </Text>
            <Button
              style={styles.signUpButton}
              appearance='ghost'
              status='basic'
              size='giant'
              accessoryLeft={ArrowForwardIcon}
              onPress={onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>
          <View style={styles.formContainer}>
            <Input
              label='EMAIL'
              placeholder='Email'
              status='basic'
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label='PASSWORD'
              style={styles.passwordInput}
              status='basic'
              placeholder='Password'
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <View style={styles.forgotPasswordContainer}>
              <Button
                style={styles.forgotPasswordButton}
                appearance='ghost'
                status='basic'
                onPress={onForgotPasswordButtonPress}>
                Forgot your password?
              </Button>
            </View>
          </View>
          <Button status='basic' size='large' onPress={onSignInButtonPress}>
            SIGN IN
          </Button>
          <View style={styles.socialAuthContainer}>
            <Text style={styles.socialAuthHintText} status='basic'>
              Sign with a social account
            </Text>
            <View style={styles.socialAuthButtonsContainer}>
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={GoogleIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={FacebookIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='basic'
                accessoryLeft={TwitterIcon}
              />
            </View>
          </View>
        </ImageOverlay>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInLabel: {
    flex: 1,
    // color: '#000'
  },
  signUpButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
    
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});

export default LoginScreen;

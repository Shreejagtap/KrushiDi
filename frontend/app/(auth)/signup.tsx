import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignupScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sign Up",
      headerTitleAlign: "center",
      headerShadowVisible: false,
    });
  }, []);

  return (
    <View className="flex-1 bg-background p-5">
      {/* Name Input */}
      <TextInput
        className="border border-gray-300 bg-gray-50 rounded-lg p-5 mb-3 text-lg text-gray-800 mt-6"
        placeholder="Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      {/* Email Input */}
      <TextInput
        className="border border-gray-300 bg-gray-50 rounded-lg p-5 mb-3 text-lg text-gray-800"
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        className="border border-gray-300 bg-gray-50 rounded-lg p-5 mb-3 text-lg text-gray-800"
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Confirm Password Input */}
      <TextInput
        className="border border-gray-300 bg-gray-50 rounded-lg p-5 mb-3 text-lg text-gray-800"
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity className="bg-primary py-4 rounded-lg items-center mb-5">
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View className="flex-row items-center my-5">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-secondaryForeground text-xl">
          Or Sign Up using
        </Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Signup Buttons */}
      <View className="flex-col items-center gap-5 mb-5">
        <TouchableOpacity className="bg-white border border-gray-300 w-full justify-center rounded-lg p-3 flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/google.png")}
            className="h-10 w-10 aspect-square"
          />
          <Text className="text-lg font-semibold">Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border border-gray-300 w-full justify-center rounded-lg p-3 flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/facebook.png")}
            className="h-10 w-10 aspect-square"
          />
          <Text className="text-lg font-semibold">Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <Text className="text-center text-secondaryForeground">
        Already have an account?{" "}
        <Text className="text-green-600 font-bold">Login</Text>
      </Text>
    </View>
  );
};

export default SignupScreen;

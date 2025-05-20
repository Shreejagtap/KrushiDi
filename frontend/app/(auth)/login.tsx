import { useNavigation, useRouter } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Login",
      headerTitleAlign: "center",
      headerShadowVisible: false,
    });
  }, []);
  return (
    <View className="flex-1 bg-background p-5">
      {/* Email Input */}
      <TextInput
        className="border border-gray-300 bg-gray-50 rounded-lg p-5 mb-3 text-lg text-gray-800 mt-6"
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

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text className="text-right font-semibold text-blue-500 mb-5">
          Forgot your password?
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        className="bg-primary py-4 rounded-lg items-center mb-5"
        onPress={() => router.push("/(app)/(tabs)/home")}
      >
        <Text className="text-white text-lg font-bold">Sign In</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View className="flex-row items-center my-5">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-secondaryForeground text-xl">
          Or Sign In using
        </Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Social Login Buttons */}
      <View className="flex-col items-center gap-5 mb-5">
        <TouchableOpacity className="bg-white border border-gray-300 w-full justify-center rounded-lg p-3 flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/google.png")}
            className="h-10 w-10 aspect-square"
          />
          <Text className="text-lg font-semibold">Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white border border-gray-300 w-full justify-center rounded-lg p-3 flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/facebook.png")}
            className="h-10 w-10 aspect-square"
          />
          <Text className="text-lg font-semibold">Sign In with Facebook</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity className="bg-white border border-gray-300 w-full justify-center rounded-lg p-3 flex-row items-center gap-2">
          <Image
            source={require("@/assets/icons/google.png")}
            className="h-10 w-10 aspect-square"
          />
          <Text className="text-lg font-semibold">Sign In with Apple</Text>
        </TouchableOpacity> */}
      </View>

      {/* Sign Up Link */}
      <Text className="text-center text-secondaryForeground">
        Need An Account?{" "}
        <Text className="text-green-600 font-bold">Sign Up</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

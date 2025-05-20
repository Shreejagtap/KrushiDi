import AuthProvider from "@/context/AuthContext";
import GlobalProvider from "@/context/GlobalContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./globals.css";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <LanguageProvider>
          <Stack />
          <StatusBar style="dark" />
        </LanguageProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./app/navigation/navigation";
import { AuthProvider } from "./app/providers/auth/auth-provider";

export default function App() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
    </>
  );
}

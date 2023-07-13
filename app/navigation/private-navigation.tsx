import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigarion.inerfaces";
import { routes, userRoutes } from "./user.routes";
import { Screen404 } from "../components/screens/system/screen-404";
import Auth from "../components/screens/auth/auth";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

export const PrivateNavigation: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "black",
        },
      }}
    >
      {user ? (
        routes.map((route) =>
          user.isAdmin || !route.isAdmin ? (
            <Stack.Screen key={route.name} {...route} />
          ) : (
            <Stack.Screen
              key={"Screen404"}
              name="Screen404"
              component={Screen404}
            />
          )
        )
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

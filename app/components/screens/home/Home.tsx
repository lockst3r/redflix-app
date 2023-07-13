import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { useTypedNavigation } from "../../../hooks/useTypedNavigation";

const Home = () => {
  const { navigate } = useTypedNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable onPress={() => navigate("Auth")} className="flex-1 items-center justify-center bg-white">
        <Text className="flex-1 items-center justify-center bg-white">Go bbksssbbnn login</Text>
      </Pressable>
    </View>
  );
};

export default Home;

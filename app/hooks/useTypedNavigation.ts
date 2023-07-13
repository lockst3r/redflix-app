import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TypeRootStackParamList } from "../navigation/navigarion.inerfaces";

export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamList>>();

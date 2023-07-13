import { useRoute, RouteProp } from "@react-navigation/native";
import { TypeRootStackParamList } from "../navigation/navigarion.inerfaces";

export const useTypedRoutes = () =>
  useRoute<RouteProp<TypeRootStackParamList>>();

import { FC } from "react";
import { View } from "react-native";
import { TypeNavigate } from "./bottom-menu.interfaces";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { menuItems } from "./menu.data";
import { MenuItem } from './menu-item'

interface IBottomMenu {
  nav: TypeNavigate;
  currentRoute?: string;
}

export const BottomMenu: FC<IBottomMenu> = (props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#929292] bg-[#090909]"
      style={{
        paddingBottom: bottom + 5,
      }}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.path} item={item} {...props} />
      ))}
    </View>
  );
};

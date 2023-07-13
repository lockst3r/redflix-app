import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { IAuthFormData } from "../../../shared/auth.interface";
import { Loader } from "../../ui";

const Auth: FC = () => {
  const [isReg, setIsReg] = useState<boolean>(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });
 
  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    const { email, password } = data;
  };
  const isLoader = false;
  return (
    <View className="mx-2 item-center justify-center h-full">
      <View className="w-9/12">
        <Text className="text-center text-white text-4xl font-bold mb-2.5">
          {isReg ? "Register" : "Login"}
        </Text>
        {isLoader ? <Loader /> : null}
        <Pressable onPress={() => setIsReg((prev) => !prev)}>
          <Text>{isReg ? "Login" : "Register"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Auth;

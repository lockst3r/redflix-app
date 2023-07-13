import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { IAuthFormData } from "../../../shared/types/auth.interface";
import { Button, DismissKeyboard, Loader } from "../../ui";
import { AuthFields } from "./auth-fields";

const Auth: FC = () => {
  const [isReg, setIsReg] = useState<boolean>(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    const { email, password } = data;

    console.log(email, password);
  };
  const isLoader = false;
  return (
    <DismissKeyboard>
      <View className="mx-2 items-center justify-center h-full">
        <View className="w-9/12">
          <Text className="text-center text-white text-4xl font-bold mb-2.5">
            {isReg ? "Register" : "Login"}
          </Text>
          {isLoader ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} isPassRequired />
              <Button onPress={handleSubmit(onSubmit)} icon="film">
                Go to watch
              </Button>
            </>
          )}
          <Pressable onPress={() => setIsReg((prev) => !prev)}>
            <Text className="text-white opacity-30 text-right text-base mt-3">
              {isReg ? "Login" : "Register"}
            </Text>
          </Pressable>
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default Auth;

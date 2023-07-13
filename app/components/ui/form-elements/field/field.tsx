import { View, Text, TextInput } from "react-native";
import cn from "clsx";
import { IField } from "./field.interfaces";
import { Controller } from "react-hook-form";

export const Field = <T extends Record<string, any>>({
  control,
  rules,
  className,
  name,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <View
              className={cn(
                "bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5",
                error ? "border-red" : "border-transparent"
              )}
            >
              <TextInput
                autoCapitalize={"none"}
                //@ts-ignore
                onChangeText={ (text) => onChange(text)}
                onBlur={onBlur}
                value={(value || "").toString()}
                className="text-white text-base"
                {...rest}
              />
            </View>
            {error && <Text className="text-red">{error.message}</Text>}
          </View>
        </>
      )}
    ></Controller>
  );
};

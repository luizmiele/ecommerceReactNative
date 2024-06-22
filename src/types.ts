import { StyleProp, TextInputProps, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonTitleProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
};

export interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}
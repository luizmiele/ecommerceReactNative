import { ReactNode } from "react";
import { DimensionValue, StyleProp, TextInputProps, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonTitleProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
};

export interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}

export type propsJanela = {
    header: string | number;
    children: ReactNode;
    height: DimensionValue;
    width: DimensionValue;
}
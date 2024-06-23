import { ReactNode } from "react";
import { DimensionValue, ImageSourcePropType, StyleProp, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

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

export interface IconProps extends TouchableOpacityProps {
    title: string;
    style?: ViewStyle | ViewStyle[];
    source?: ImageSourcePropType;
    width: number;
    height: number;
    textStyle?: StyleProp<TextStyle>;
    onPress: () => void;
}
import { ReactNode } from "react";
import { DimensionValue, ImageSourcePropType, StyleProp, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonTitleProps extends TouchableOpacityProps {
    title: string;
    onPress?: () => void;
};

export interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}

export type itemFoundProps={
    onPress?:()=>void;
    titulo: string;
    imagem:string;
    description:string;
    price:number,
    type:string,
}
export type itens={
    id:number|string;
    name:string;
    description:string
    img:string;
    price:number
    type:string
}

export type propsJanela = {
    header?: string | number | null;
    onPress?: () => void,
    children: ReactNode | undefined | null;
    height?: DimensionValue | null;
    width?: DimensionValue | null;
}

export type messageProps={
    onPress?:() => void;
    titulo?:string | number | null
    error?:boolean | null;
    content: string | number | null;
}

export interface IconProps extends TouchableOpacityProps {
    title: string;
    style?: ViewStyle | ViewStyle[];
    source?: ImageSourcePropType;
    width: number;
    height: number;
    textStyle?: StyleProp<TextStyle>;
    onPress?: () => void;
}

export interface SearchBar{
    style?: object;
    onPressLupa?: () => void;
    [key: string]: any;
}


export type Item = {
    imagem: string,
    imagem64: string,
    nome: string,
    descricao: string,
    tipo: string,
    preco: number,
    def_magica: number,
    def_fisica: number,
    durabilidade: number
}


export interface FooterProps extends TouchableOpacityProps {
    onPress?: () => void;
}
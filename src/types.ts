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
    onPress?:()=>void,
    titulo: string,
    imagem:string,
    description:string,
    price:number,
    type:string,
    function1?:()=>void,
    function2?:()=>void,
    text1?:string,
    text2?:string,
    metadata:{
        durability: number,
        phy_defense: number,
        mag_defense: number,
    }
}
export type itens={
    id:number|string;
    name:string;
    description:string
    img:string;
    price:number
    type:string
    metadata:{
        durability: number,
        phy_defense: number,
        mag_defense: number,
    }
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
    ligado?:boolean;
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

export interface Item{
    img: string,
    name: string,
    description: string,
    price: number,
    type: string,
}

export interface ItemEquipment extends Item{
    metadata: {
        phy_defense: number,
        mag_defense: number,
        durability: number
    }
}


export interface FooterProps extends TouchableOpacityProps {
    onPress?: () => void;
}

export type Colaborador = {
        
        nome:string,
        email:string ,
        linkedin:string ,
        github:string ,
        foto: ImageSourcePropType
}
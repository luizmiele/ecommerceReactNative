import { ReactNode } from "react";
import { DimensionValue, ImageSourcePropType, StyleProp, TextInputProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonTitleProps extends TouchableOpacityProps {
    title: string;
    onPress?: () => void;
};

export interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
}

export type itemFoundProps = {
    onPress?: () => void,
    titulo: string,
    imagem: string,
    description: string,
    price: number,
    type: string,
    function1?: () => void,
    function2?: () => void,
    text1?: string,
    text2?: string,
    status:string,
    metadata: {
        durability: number,
        phy_defense: number,
        mag_defense: number,
    }
}
export type itens = {
    id: number | string;
    name: string;
    description: string;
    img: string;
    price: number;
    type: string;
    status:string;
    metadata: {
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

export type messageProps = {
    onPress?: () => void;
    titulo?: string | number | null;
    error?: boolean | null;
    content: string | number | null;
    ligado?: boolean;
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

export interface SearchBar {
    style?: object;
    onPressLupa?: () => void;
    [key: string]: any;
}

export interface Item {
    img: string ,
    name: string,
    description: string,
    price: number,
    type: string,
    status: string
}

export interface ItemEquipment extends Item {
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
    nome: string,
    email: string,
    linkedin: string,
    github: string,
    foto: ImageSourcePropType
}

export type PropsChildren = {
    children: ReactNode;
};

export interface User {
    email: string;
    senha: string;
}
export interface Response {
    user: User | null;
}

export type AuthContext = {
    user: User | null;
    login(email: string, senha: string): Promise<boolean>;
    logout(): void;
    signed: boolean;
    loading: boolean;
};

export type DrawerNavigation = {
    PortugolEcommerce: undefined;
    CriarProdutosScreen: undefined
    VisualizarProdutosScreen: undefined;
    AtualizarProdutosScreen: undefined;
    LixeiraScreen: undefined;
    CalculadoraScreen: undefined;
    SobreNosScreen: undefined;
};


export type PublicStackNavigation = {
    Splash: undefined;
    Login: undefined;
};

export type PrivateStackNavigation = {
    Workspace: undefined;
    Lixeira: undefined;
    CriarProdutos: undefined;
    VisualizarProdutos: undefined;
    AtualizarProdutos: undefined;
    SobreNos: undefined;
    PortugolStudio: undefined;
    Calculadora: undefined;
    Tinder: undefined;
    PlayStore: undefined;
    Games: undefined;
    GitHubLogin: undefined;
    GitHubSignIn: undefined;
    MercadoLivre: undefined;
    Behance: undefined;
    Alura: undefined;
};

export type App = {
    id: number,
    name: string,
    image: string,
    rating: number
}
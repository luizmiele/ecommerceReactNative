import { TouchableOpacity, Image, Text } from "react-native";
import { IconProps } from "../../types";

export default function Icone({ title, style, source, width, height, textStyle, ...rest }: IconProps) {
    return(
       <TouchableOpacity  style={style} {...rest}>
        <Image
            source={source}
            style={{ width: width, height: height }}
        />
        <Text style={textStyle}>{title}</Text>
       </TouchableOpacity>
    );
}
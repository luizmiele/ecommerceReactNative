import { Image, ImageBackground, Pressable } from "react-native";
import {styles} from './styles';

const DisplayItem = ({itemImage, onPress = () => {}}: {itemImage: Object, onPress?: () => void}) => {
    
    const imageBackground = {uri: 'https://cdn.discordapp.com/attachments/1216815323198525470/1254851149044121680/image.png?ex=667afeb3&is=6679ad33&hm=74f2a622968a0d8f32191d954b7f33200865fc1c209511556e8b3de08778af33&'}

    const imagemAlternativa = {uri: 'https://www.imagenspng.com.br/wp-content/uploads/2020/10/among-us-white-leaf-hat-png-01.png'}

    return(
        <Pressable style={styles.container} onPress={onPress}>
             <ImageBackground source={imageBackground} resizeMode="cover" style={styles.imageBackground}>
                <Image source={itemImage || imagemAlternativa} style={styles.image}/>
             </ImageBackground>
        </Pressable>
    );
}

export default DisplayItem;
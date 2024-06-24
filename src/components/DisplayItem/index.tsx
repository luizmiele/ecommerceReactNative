import { Image, ImageBackground, View } from "react-native";
import {styles} from './styles';

const DisplayItem = ({itemImage}: {itemImage: Object}) => {
    const imageBackground = {uri: 'https://cdn.discordapp.com/attachments/1216815323198525470/1254851149044121680/image.png?ex=667afeb3&is=6679ad33&hm=74f2a622968a0d8f32191d954b7f33200865fc1c209511556e8b3de08778af33&'}

    return(
        <View style={styles.container}>
             <ImageBackground source={imageBackground} resizeMode="cover" style={styles.imageBackground}>
                <Image source={itemImage} style={styles.image}/>
             </ImageBackground>
        </View>
    );
}

export default DisplayItem;
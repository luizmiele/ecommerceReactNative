import { Text, View } from "react-native"
import { messageProps } from "../../types"
import Janela from "../Janela"
import styles from "./styles"
import Icone from "../Icone"
import Button from "../Button"


function Mensagem({ error, content, titulo, onPress }: messageProps) {

    switch (error) {
        case true:
            return (
                <View style={styles.main}>
                    <Janela header={titulo} height={'20%'} width={'70%'}>
                        <View style={styles.conteudo}>
                            <View style={styles.conteudoMensagem}>
                                <Icone style={styles.icon} title=" " height={50} width={50} source={require('../../../assets/icons/msg_error-0.png')} />
                                <Text style={styles.text}>{content}</Text>
                            </View>
                        <Button title="Ok" onPress={onPress} />
                        </View>
                    </Janela>
                </View>
            )
        default:
            return (
                <View style={styles.main}>
                    <Janela header={titulo} height={'20%'} width={'70%'}>
                        <View style={styles.conteudo}>
                            <View style={styles.conteudoMensagem}>
                                <Icone style={styles.icon} title=" " height={50} width={50} source={require('../../../assets/icons/check-0.png')} />
                                <Text style={styles.text}>{content}</Text>
                            </View>
                            <Button title="Ok" onPress={(onPress)} />
                        </View>
                    </Janela>
                </View>
            )
    }
}
export default Mensagem
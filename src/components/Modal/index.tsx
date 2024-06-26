import { Modal as ModalContainer, View, Image, Text } from "react-native";
import { styles } from "./styles"
import Button from "../Button";

interface ModalProps {
    isModalVisible: boolean;
    titulo: string;
    imagem: string;
    description: string;
    price: number,
    type: string,
    button1: string,
    button2: string,
    metadata: {
        durability: number,
        phy_defense: number,
        mag_defense: number,
    }
    onClose?: () => void,
    function1?: () => void,
    function2?: () => void
}

export const Modal = ({ ...rest }: ModalProps) => {
      
    return (
        <ModalContainer
            animationType="fade"
            transparent={true}
            visible={rest.isModalVisible}
            onRequestClose={rest.onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imgContainer}>
                        <Image
                            style={[styles.imgCentro]}
                            source={{ uri: rest.imagem }
                            }
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Informações:</Text>
                        <View style={styles.outerInfoBox}>
                            <View style={styles.infoBox}>
                                <View style={styles.infoContent}>
                                    <Text style={styles.label}>Nome:</Text>
                                    <Text style={{ fontStyle: 'italic' }}>{rest.titulo}</Text>
                                </View>
                                <View style={styles.infoContent}>
                                    <Text style={styles.label}>Descrição:</Text>
                                    <Text style={{ fontStyle: 'italic' }}>{rest.description}</Text>
                                </View>
                                <View style={styles.priceInfoContent}>
                                    <Text style={styles.label}>Preço:</Text>
                                    <Text style={{ fontStyle: 'italic' }}>{rest.price} Zezinhos</Text>
                                </View>
                                <View style={styles.typeInfoContent}>
                                    <Text style={styles.label}>Tipo:</Text>
                                    <View style={styles.checkboxContainer}>
                                        <Text style={{ fontStyle: 'italic' }}>{rest.type}</Text>
                                    </View>
                                </View>
                                {
                                    rest.type === 'Armor' ? <View style={styles.typeInfoContent}>
                                            <Text style={styles.label}>Detalhes:</Text>
                                        <View style={styles.specsContent}>
                                            <View style={styles.checkboxContainer}>
                                                <Text style={{ fontStyle: 'italic' }}>Defesa Física: {rest.metadata.phy_defense}</Text>
                                            </View>
                                            <View style={styles.checkboxContainer}>
                                                <Text style={{ fontStyle: 'italic' }}>Defesa Magica: {rest.metadata.mag_defense}</Text>
                                            </View>
                                            <View style={styles.checkboxContainer}>
                                                <Text style={{ fontStyle: 'italic' }}>Durabilidade: {rest.metadata.durability}</Text>
                                            </View>
                                        </View>
                                    </View> : null
                                }
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title={rest.button1} onPress={rest.function1} />
                            <Button title={rest.button2} onPress={rest.function2} />
                        </View>
                    </View>
                </View>
            </View>
        </ModalContainer>

    )
}
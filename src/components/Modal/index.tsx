import { Modal as ModalContainer, View, Image, Text } from "react-native";
import { StackTypes } from "../../routes/stack";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import { styles } from "./styles"
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";

interface ModalProps {
    isModalVisible: boolean;
    titulo: string;
    imagem: string;
    description: string;
    price: number,
    type: string,
    onClose: () => void;
}

export const Modal = ({ ...rest }: ModalProps) => {

    const navigation = useNavigation<StackTypes>();

    function handlesignIn() {
        navigation.navigate("AtualizarProdutos");
    };

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
                                    <Text style={{ fontStyle: 'italic' }}>{rest.price}</Text>
                                </View>
                                <View style={styles.typeInfoContent}>
                                    <Text style={styles.label}>Tipo:</Text>
                                    <View style={styles.checkboxContainer}>
                                        <Text style={{ fontStyle: 'italic' }}>{rest.type}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title="Cancelar" onPress={rest.onClose} />
                            <Button title="Editar" onPress={handlesignIn} />
                        </View>
                    </View>
                </View>
            </View>
        </ModalContainer>

    )
}
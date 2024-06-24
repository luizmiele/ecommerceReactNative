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
    onClose: () => void;
}

export const Modal = ({
    isModalVisible,
    onClose
    }: ModalProps ) => {

    const navigation = useNavigation<StackTypes>();

    const [nameItem, setNameItem] = useState<string>('item');
    const [descriptionItem, setDescriptionItem] = useState<string>('descriptionItem');
    const [priceItem, setPriceItem] = useState<number>(0);

    const [isArmorChecked, setIsArmorChecked] = useState(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState(false);

    function handlesignIn() {
        navigation.navigate("AtualizarProdutos");
    };

    const handleArmorCheck = () => {
        setIsArmorChecked(!isArmorChecked);
        if (!isArmorChecked) {
            setIsMaterialChecked(false);
        }
    };

    const handleMaterialCheck = () => {
        setIsMaterialChecked(!isMaterialChecked);
        if (!isMaterialChecked) {
            setIsArmorChecked(false);
        }
    };
    

    return (
        <ModalContainer
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.imgCentro}
                            source={require("../../../assets/icons/guguteste.png")}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoHeader}>Informações:</Text>
                        <View style={styles.outerInfoBox}>
                            <View style={styles.infoBox}>
                                <View style={styles.infoContent}>
                                    <Text style={styles.label}>Nome:</Text>
                                    <Input value={nameItem} />
                                </View>
                                <View style={styles.infoContent}>
                                    <Text style={styles.label}>Descrição:</Text>
                                    <Input value={descriptionItem} style={styles.descriptionInput}/>
                                </View>
                                <View style={styles.priceInfoContent}>
                                    <Text style={styles.label}>Preço:</Text>                                    
                                    <Input value={String(priceItem)} style={styles.priceInput}/>
                                </View>
                                <View style={styles.typeInfoContent}>
                                    <Text style={styles.label}>Tipo:</Text>
                                    <View style={styles.checkboxContainer}>
                                        <Checkbox label={"Armadura"} checked={isArmorChecked} onChange={handleArmorCheck}/>
                                        <Checkbox label={"Material"} checked={isMaterialChecked} onChange={handleMaterialCheck}/>                                        
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button title="Cancelar" onPress={onClose} />
                            <Button title="Editar" onPress={handlesignIn} />
                        </View>
                    </View>
                </View>
            </View>
        </ModalContainer>

    )
}
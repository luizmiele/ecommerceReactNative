import { View} from "react-native";
import { ItemEquipment } from "../../types";
import FormularioInputs from "../FormularioInputs";
import {styles} from "./styles";

export default function FormularioInfos({ itemEquipment, setItemEquipment, isArmorChecked }: { itemEquipment: ItemEquipment, setItemEquipment: any, isArmorChecked: boolean }) {

    const alternativeStyle = {
        flex: 1, 
        gap: 20,
        flexDirection: 'row',
    }

    const inputStyle = {
        height: 25, 
        width: 100
    }

    return (
        <View
            style={isArmorChecked ?
                styles.outerInfoBox : styles.outerInfoBoxDisabled} pointerEvents={
                    isArmorChecked ?
                        'auto' : 'none'}
        >
            <View style={styles.infoBox}>
                <View style={styles.inputBox}>
                    <FormularioInputs
                        label='Defesa Mágica:'

                        onChangeText={
                            e => setItemEquipment(
                                {
                                    ...itemEquipment,
                                    metadata: { ...itemEquipment.metadata, magic_defense: Number(e) }
                                })}

                        defaultValue={itemEquipment.metadata.magic_defense}
                          
                        alternativeStyle={alternativeStyle}
                        styleDefault={inputStyle} />
                </View>
                <View style={styles.inputBox}>
                    <FormularioInputs
                        label='Defesa Física:'

                        onChangeText={
                            e => setItemEquipment(
                                {
                                    ...itemEquipment,
                                    metadata: { ...itemEquipment.metadata, phy_defense: Number(e) }
                                })}

                        defaultValue={itemEquipment.metadata.phy_defense}

                        alternativeStyle={alternativeStyle}
                        styleDefault={inputStyle} />
                </View>
                <View style={styles.inputBox}>
                    <FormularioInputs
                        label='Durabilidade:'

                        onChangeText={
                            e => setItemEquipment(
                                {
                                    ...itemEquipment,
                                    metadata: { ...itemEquipment.metadata, durability: Number(e) }
                                })}

                        defaultValue={itemEquipment.metadata.durability}

                        alternativeStyle={alternativeStyle}
                        styleDefault={inputStyle} />
                </View>
            </View>
        </View>
    );
}
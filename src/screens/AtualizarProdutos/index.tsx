import { Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Item, ItemEquipment } from "../../types";
import { useEffect, useState } from "react";
import { editItem } from "../../services/Api/api";
import FormularioHeader from "../../components/FormularioHeader";
import FormularioInputs from "../../components/FormularioInputs";

export default function CriarProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);

    const [novoItem, setItem] = useState<Item>({
        img: '',
        name: '',
        description: '',
        price: 0,
        type: '',
    });

    const [novoItemEquipment, setItemEquipment] = useState<ItemEquipment>({
        img: '',
        name: '',
        description: '',
        price: 0,
        type: '',
        metadata: {
            phy_defense: 0,
            magic_defense: 0,
            durability: 0
        }
    });

    const handleArmorCheck = () => {
        setIsArmorChecked(!isArmorChecked);
        if (!isArmorChecked) {
            setIsMaterialChecked(false);
            setItemEquipment({ ...novoItemEquipment, type: 'armadura' });
        }
    };

    const handleMaterialCheck = () => {
        setIsMaterialChecked(!isMaterialChecked);
        if (!isMaterialChecked) {
            setIsArmorChecked(false);
            setItemEquipment({ ...novoItemEquipment, type: 'material' });
        }
    };

    const cancelaItem = () => {
        setIsArmorChecked(false);
        setIsMaterialChecked(false);
        setItemEquipment({
            img: '',
            name: '',
            description: '',
            price: 0,
            type: '',
            metadata: {
                phy_defense: 0,
                magic_defense: 0,
                durability: 0
            }
        })
    }

    const salvaItem = () => {
        let formData = new FormData();
        if (isMaterialChecked) {
            const item: Item = {
                img: novoItemEquipment.img,
                name: novoItemEquipment.name,
                description: novoItemEquipment.description,
                price: novoItemEquipment.price,
                type: novoItemEquipment.type
            }
            formData = { ...formData, ...item };
        } else if (isArmorChecked) {
            formData = { ...formData, ...novoItemEquipment };
        } else {
            alert('Nenhuma opção selecionada');
            return;
        }
    };

    const pesquisaItem = () => {

    }

    const deletaItem = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.janela}>
                <Janela header="Editar Produtos" height={700} width={"90%"}>
                    <KeyboardAvoidingView
                        style={styles.todos}
                        behavior="height">

                        <FormularioHeader itemEquipment={novoItemEquipment} setItemEquipment={setItemEquipment} />

                        <View>
                            <FormularioInputs 
                            label='Nome:' 
                            onChangeText={e => setItemEquipment({ ...novoItemEquipment, name: e })} 
                            defaultValue={novoItemEquipment.name}  
                            multiLine={false}
                            numberOfLines={1}/>

                            <FormularioInputs 
                            label='Descrição:' 
                            onChangeText={e => setItemEquipment({ ...novoItemEquipment, description: e })} 
                            defaultValue={novoItemEquipment.description}  
                            multiLine={true}
                            numberOfLines={4}/>
                        </View>

                        <View style={styles.tipo}>

                            <View>
                                <Text>Tipo: </Text>
                                <Checkbox label='Armadura' checked={isArmorChecked} onChange={handleArmorCheck} />
                                <Checkbox label='Material' checked={isMaterialChecked} onChange={handleMaterialCheck}
                                />
                            </View>

                            <View style={styles.inputView}>
                                <Text>Preço: </Text>
                                <TextInput
                                    placeholder="R$: "
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={e => setItemEquipment({ ...novoItemEquipment, price: Number(e) })}
                                    value={String(novoItemEquipment.price)} />
                            </View>
                        </View>

                        <View
                            style={isArmorChecked ?
                                styles.outerInfoBox : styles.outerInfoBoxDisabled} pointerEvents={
                                    isArmorChecked ?
                                        'auto' : 'none'}
                        >
                            <View style={styles.infoBox}>
                                <View style={styles.inputBox}>
                                    <Text>Defesa Mágica: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItemEquipment({
                                            ...novoItemEquipment,
                                            metadata: { ...novoItemEquipment.metadata, magic_defense: Number(e) }
                                        })}
                                        value={String(novoItemEquipment.metadata.magic_defense)} />
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Defesa Física: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItemEquipment({
                                            ...novoItemEquipment,
                                            metadata: { ...novoItemEquipment.metadata, phy_defense: Number(e) }
                                        })}
                                        value={String(novoItemEquipment.metadata.phy_defense)} />
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Durabilidade: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItemEquipment({
                                            ...novoItemEquipment,
                                            metadata: { ...novoItemEquipment.metadata, durability: Number(e) }
                                        })}
                                        value={String(novoItemEquipment.metadata.durability)} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.botoes}>
                            <Button title='Deletar' onPress={deletaItem} />
                            <Button title='Cancelar' onPress={cancelaItem} />
                            <Button title='Editar' onPress={salvaItem} />
                        </View>
                    </KeyboardAvoidingView>
                </Janela>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerContent}>
                    <TouchableOpacity style={styles.btnStart}>
                        <Image
                            source={require("../../../assets/icons/logo-98-bar 1.png")}
                        />
                        <Text style={styles.btnText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

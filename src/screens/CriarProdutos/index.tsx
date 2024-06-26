import { Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Modal } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import DisplayItem from "../../components/DisplayItem";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Item, ItemEquipment } from "../../types";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { postItem } from "../../services/Api/api";
import Mensagem from "../../components/Mensagem";

export default function CriarProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);
    const [verificador, setVerificador] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);


    const [novoItem, setItem] = useState<Item>({
        img: '',
        name: '',
        description: '',
        price: 0,
        type: '',
        status: "ativo",
    });

    const [novoItemEquipment, setItemEquipment] = useState<ItemEquipment>({
        img: '',
        name: '',
        description: '',
        price: 0,
        type: '',
        status: "ativo",
        metadata: {
            phy_defense: 0,
            mag_defense: 0,
            durability: 0
        }
    });

    const carregamento = () => {
        setTimeout(() => {
            setLoading(false);
        }, 8850);
    }

    useEffect(() => {
        carregamento();
    }, []);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const manipResult = await ImageManipulator.manipulateAsync(
                    result.assets[0].uri,
                    [{ resize: { width: 400 } }],
                    { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
                );

                const base64 = await FileSystem.readAsStringAsync(
                    manipResult.uri,
                    { encoding: FileSystem.EncodingType.Base64 }
                );

                setItemEquipment({ ...novoItemEquipment, img: `data:image/jpeg;base64,${String(base64)}` });
            }
        } catch (error) {
            console.error("Erro ao selecionar ou manipular a imagem:", error);
        }
    };
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
            status: "ativo",
            metadata: {
                phy_defense: 0,
                mag_defense: 0,
                durability: 0
            }
        })
    }

    const verificaInputVazio = (item: any, jsonVerificador: any) => {
        for (let chave in item) {
            if (item[chave] == jsonVerificador[chave]) {
                return true;
            }
        }
        return false;
    }

    const salvaItem = () => {

        let formData = new FormData();

        const jsonVerificador: Item = {
            img: '',
            name: '',
            description: '',
            price: 0,
            type: '',
            status: '',
        }

        if (isMaterialChecked) {
            const item: Item = {
                img: novoItemEquipment.img,
                name: novoItemEquipment.name,
                description: novoItemEquipment.description,
                price: novoItemEquipment.price,
                type: novoItemEquipment.type,
                status: 'ativo',
            }

            const verificaInputVazio = (item: any, jsonVerificador: any) => {
                for (let chave in item) {
                    if (item[chave] == jsonVerificador[chave]) {
                        return true;
                    }
                }
                return false;
            }

            if (verificaInputVazio(item, jsonVerificador)) {
                setVerificador(verificaInputVazio(item, jsonVerificador))
                return;
            }

            formData = { ...formData, ...item };
        } else if (isArmorChecked) {

            if (verificaInputVazio(novoItemEquipment, jsonVerificador)) {
                setVerificador(verificaInputVazio(novoItemEquipment, jsonVerificador))
                return;
            }

            formData = { ...formData, ...novoItemEquipment };
        }

        setSaving(() => {
            setSaving(true);
            return true;
        });

        setTimeout(() => {
            setSaving(false);
            postItem(formData);
        }, 4000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.janela}>
                {loading ?
                    <Modal animationType="fade" transparent={true} visible={loading} style={{ flex: 1}}>
                        <Image
                            style={{ alignSelf: 'center', marginTop: '50%' }}
                            source={require("../../../assets/loading.gif")}
                        />
                    </Modal> :
                    <Janela header="Criar Produtos" height={700} width={"90%"}>
                        <KeyboardAvoidingView
                            style={styles.todos}
                            behavior="height">

                            <DisplayItem itemImage={novoItemEquipment.img} onPress={pickImage} />
                            <View>
                                <Text>Nome: </Text>
                                <TextInput
                                    style={styles.inputName}
                                    onChangeText={e => setItemEquipment({ ...novoItemEquipment, name: e })}
                                    value={novoItemEquipment.name} />
                                <Text>Descrição: </Text>
                                <TextInput
                                    style={styles.inputDescription}
                                    multiline={true}
                                    numberOfLines={4}
                                    onChangeText={text => setItemEquipment({ ...novoItemEquipment, description: text })}
                                    value={novoItemEquipment.description} />
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
                                                metadata: { ...novoItemEquipment.metadata, mag_defense: Number(e) }
                                            })}
                                            value={String(novoItemEquipment.metadata.mag_defense)} />
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
                                <Button title='Cancelar' onPress={cancelaItem} />
                                <Button title='Salvar' onPress={salvaItem} />
                            </View>
                        </KeyboardAvoidingView>
                    </Janela>}
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
            <Modal animationType="fade" transparent={true} visible={saving} style={{ flex: 1, width: '100%', height: '100%'}}>
                        <Image
                            style={{ alignSelf: 'center', marginTop: '70%', width: 400, flex: 0.35
                            }}
                            source={require("../../../assets/saving.webp")}
                        />
            </Modal>
            <Mensagem titulo="Error" content={"Todos os campos devem ser preenchidos!"} ligado={verificador} onPress={() => setVerificador(false)} error />
        </View>
    );
}

import { Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import DisplayItem from "../../components/DisplayItem";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Item } from "../../types";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

export default function CriarProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);


    const [novoItem, setItem] = useState<Item>({
        imagem: '',
        imagem64: '',
        nome: '',
        descricao: '',
        tipo: '',
        preco: 0,
        def_magica: 0,
        def_fisica: 0,
        durabilidade: 0
    });


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

                setItem({...novoItem, imagem: manipResult.uri});

                const base64 = await FileSystem.readAsStringAsync(
                    manipResult.uri,
                    { encoding: FileSystem.EncodingType.Base64 }
                );
                setItem({...novoItem, imagem: base64});
            }
        } catch (error) {
            console.error("Erro ao selecionar ou manipular a imagem:", error);
        }
    };

    const handleArmorCheck = () => {
        setIsArmorChecked(!isArmorChecked);
        if (!isArmorChecked) {
            setIsMaterialChecked(false);
            setItem({ ...novoItem, tipo: 'armadura' });
        }
    };

    const handleMaterialCheck = () => {
        setIsMaterialChecked(!isMaterialChecked);
        if (!isMaterialChecked) {
            setIsArmorChecked(false);
            setItem({ ...novoItem, tipo: 'material' });
        }
    };

    const cancelaItem = () => {
        setItem({
            imagem: '',
            imagem64: '',
            nome: '',
            descricao: '',
            tipo: '',
            preco: 0,
            def_magica: 0,
            def_fisica: 0,
            durabilidade: 0
        });
    }

    console.log(novoItem)

    return (
        <View style={styles.container}>
            <View style={styles.janela}>
                <Janela header="Criar Produtos" height={700} width={"90%"}>
                    <KeyboardAvoidingView
                        style={styles.todos}
                        behavior="height">

                        <DisplayItem itemImage={novoItem.imagem} onPress={pickImage} />
                        <View>
                            <Text>Nome: </Text>
                            <TextInput
                                style={styles.inputName}
                                onChangeText={e => setItem({ ...novoItem, nome: e })}
                                value={novoItem.nome} />
                            <Text>Descrição: </Text>
                            <TextInput
                                style={styles.inputDescription}
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={text => setItem({ ...novoItem, descricao: text })}
                                value={novoItem.descricao} />
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
                                    onChangeText={e => setItem({ ...novoItem, preco: Number(e) })}
                                    value={String(novoItem.preco)} />
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
                                        onChangeText={e => setItem({ ...novoItem, def_magica: Number(e) })}
                                        value={String(novoItem.def_magica)} />
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Defesa Física: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItem({ ...novoItem, def_fisica: Number(e) })}
                                        value={String(novoItem.def_fisica)} />
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Durabilidade: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItem({ ...novoItem, durabilidade: Number(e) })}
                                        value={String(novoItem.preco)} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.botoes}>
                            <Button title='Cancelar' onPress={cancelaItem} />
                            <Button title='Salvar' />
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

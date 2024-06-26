import { Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Item, ItemEquipment } from "../../types";
import { useEffect, useState } from "react";
import { editItem, deleteLogico } from "../../services/Api/api";
import FormularioHeader from "../../components/FormularioHeader";
import FormularioInputs from "../../components/FormularioInputs";
import FormularioInfos from "../../components/FormularioInfos";
import Mensagem from "../../components/Mensagem";

const itemJson = {
    img: '',
    name: '',
    description: '',
    price: 0,
    type: '',
    status: '',
}

const itemEquipmentJson = {
    img: '',
    name: '',
    description: '',
    price: 0,
    type: '',
    status: '',
    metadata: {
        phy_defense: 0,
        mag_defense: 0,
        durability: 0
    }
}

export default function AtualizaProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);
    const [itemId, setItemId] = useState<string>('');
    const [verificador, setVerificador] = useState<boolean>(false);


    const [novoItem, setItem] = useState<Item>(itemJson);

    const [novoItemEquipment, setItemEquipment] = useState<ItemEquipment>(itemEquipmentJson);

    const handleArmorCheck = () => {
        setIsArmorChecked(true);
        setIsMaterialChecked(false);
        setItemEquipment({ ...novoItemEquipment, type: 'Armor' });
    };

    const handleMaterialCheck = () => {
        setIsMaterialChecked(true);
        setIsArmorChecked(false);
        setItemEquipment({
            ...novoItemEquipment,
            type: 'Material',
            metadata: {
                phy_defense: 0, mag_defense: 0, durability: 0
            }
        });
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
            status: '',
            metadata: {
                phy_defense: 0,
                mag_defense: 0,
                durability: 0
            }
        })
    }

    const deletaItem = () => {
        deleteLogico(itemId)
        cancelaItem();
    }

    const verificaInputVazio = (item: any, jsonVerificador: any) => {
        for (let chave in item) {
            if (item[chave] == jsonVerificador[chave]) {
                return true;
            }
        }
        return false;
    }

    const editaItem = () => {
        let formData = new FormData();
        
        const jsonVerificador: Item = itemJson;

        if(isMaterialChecked) {
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

        editItem(itemId, formData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.janela}>
                <Janela header="Editar Produtos" height={700} width={"90%"}>
                    <KeyboardAvoidingView
                        style={styles.todos}
                        behavior="height">
                        <FormularioHeader
                            itemEquipment={novoItemEquipment}
                            setItemEquipment={setItemEquipment}
                            setItemId={setItemId}
                            handleArmorCheck={handleArmorCheck}
                            handleMaterialCheck={handleMaterialCheck}
                            cancelaItem={cancelaItem}
                        />
                        <ScrollView>
                            <View>
                                <FormularioInputs
                                    label='Nome:'
                                    onChangeText={e => setItemEquipment({ ...novoItemEquipment, name: e })}
                                    defaultValue={novoItemEquipment.name}
                                    styleDefault={{ height: 30 }}
                                />
                                <FormularioInputs
                                    label='Descrição:'
                                    onChangeText={e => setItemEquipment({ ...novoItemEquipment, description: e })}
                                    defaultValue={novoItemEquipment.description}
                                    styleDefault={{ height: 70 }}
                                    multiLine={true}
                                    numberOfLines={5} />
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
                            <FormularioInfos itemEquipment={novoItemEquipment} setItemEquipment={setItemEquipment} isArmorChecked={isArmorChecked} />
                            <View style={styles.botoes}>
                                <Button title='Deletar' onPress={deletaItem} />
                                <Button title='Cancelar' onPress={cancelaItem} />
                                <Button title='Editar' onPress={editaItem} />
                            </View>
                        </ScrollView>
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
            <Mensagem titulo="Error" content={"Todos os campos devem ser preenchidos!"} ligado={verificador} onPress={() => setVerificador(false)} error />
        </View>
    );
}

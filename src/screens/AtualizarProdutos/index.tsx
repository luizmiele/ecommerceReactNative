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
import FormularioInfos from "../../components/FormularioInfos";

export default function CriarProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);
    const [itemId, setItemId] = useState<string>('');

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

    const deletaItem = () => {

    }

    const editaItem = () => {

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
                            styleDefault={{height: 30}}
                            />

                            <FormularioInputs 
                            label='Descrição:' 
                            onChangeText={e => setItemEquipment({ ...novoItemEquipment, description: e })} 
                            defaultValue={novoItemEquipment.description}
                            styleDefault={{height: 70}}
                            multiLine={true}
                            numberOfLines={5}/>
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

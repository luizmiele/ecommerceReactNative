import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import DisplayItem from "../../components/DisplayItem";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { Item } from "../../types";
import { useState } from "react";

export default function CriarProdutos() {


    const [isArmorChecked, setIsArmorChecked] = useState<boolean>(false);
    const [isMaterialChecked, setIsMaterialChecked] = useState<boolean>(false);

    const [novoItem, setItem] = useState<Item>({
        imagem: '',
        nome: '',
        descricao: '', 
        tipo: '',
        preco: 0,
        def_magica: 0, 
        def_fisica: 0, 
        durabilidade: 0
    });

    
    const handleArmorCheck = () => {
        setIsArmorChecked(!isArmorChecked);
        if (!isArmorChecked) {
            setIsMaterialChecked(false);
            setItem({...novoItem, tipo: 'armadura'});
        }
    };

    const handleMaterialCheck = () => {
        setIsMaterialChecked(!isMaterialChecked);
        if (!isMaterialChecked) {
            setIsArmorChecked(false);
            setItem({...novoItem, tipo: 'material'});
        }
    };

    const cancelaItem = () => {
        setItem({
            imagem: '',
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
                <Janela header="Criar Produtos" height={"90%"} width={"90%"}>
                    <View style={styles.todos}>

                        <DisplayItem itemImage={novoItem.imagem} />

                        <View>
                            <Text>Nome: </Text>
                            <TextInput
                                style={styles.inputName}
                                onChangeText={e => setItem({...novoItem, nome: e})} 
                                value={novoItem.nome}/>
                            <Text>Descrição: </Text>
                            <TextInput
                                style={styles.inputDescription}
                                multiline={true}
                                numberOfLines={4} 
                                onChangeText={text => setItem({...novoItem, descricao: text})} 
                                value={novoItem.descricao}/>
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
                                    onChangeText={e => setItem({...novoItem, preco: Number(e)})} 
                                    value={String(novoItem.preco)}/>
                            </View>
                        </View>

                        <View style={isArmorChecked ? styles.outerInfoBox : styles.outerInfoBoxDisabled}  pointerEvents={isArmorChecked ? 'auto' : 'none'}>
                            <View style={styles.infoBox}>
                                <View style={styles.inputBox}>
                                    <Text>Defesa Mágica: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input} 
                                        onChangeText={e => setItem({...novoItem, def_magica: Number(e)})} 
                                        value={String(novoItem.def_magica)}/>
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Defesa Física: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItem({...novoItem, def_fisica: Number(e)})}  
                                        value={String(novoItem.def_fisica)}/>
                                </View>
                                <View style={styles.inputBox}>
                                    <Text>Durabilidade: </Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.input}
                                        onChangeText={e => setItem({...novoItem, durabilidade: Number(e)})}  
                                        value={String(novoItem.durabilidade)}/>
                                </View>
                            </View>
                        </View>

                        <View style={styles.botoes}>
                            <Button title='Cancelar'onPress={cancelaItem}/>
                            <Button title='Salvar' />
                        </View>
                    </View>
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
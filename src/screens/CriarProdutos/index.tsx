import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { styles } from './styles';
import Janela from "../../components/Janela";
import DisplayItem from "../../components/DisplayItem";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

export default function CriarProdutos() {

    const imageItem = { uri: 'https://i.seadn.io/gae/hDhaRCy22Cf9QqzReF9FYSyD3oWhakERG58wWllHU8bxish-nu8skJnEztU6Cm3dyeR4PE02clpeDslLZTF213i7rHNsgqT4BtBIsg?auto=format&dpr=1&w=1000' }

    function marcaCheck() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.janela}>
                <Janela header="Criar Produtos" height={"90%"} width={"90%"}>
                    <View style={styles.todos}>
                        
                        <DisplayItem itemImage={imageItem} />
                        
                        <View style={styles.main}>
                            <Text>Nome: </Text>
                            <Input />
                            <Text>Descrição: </Text>
                            <TextInput
                                style={styles.inputDescription} />
                        </View>
                        <View style={styles.tipo}>

                            <View>
                                <Text>Tipo: </Text>
                                <Checkbox label='Armadura' checked={false} onChange={marcaCheck} />
                                <Checkbox label='Material' checked={false} onChange={marcaCheck} />
                            </View>

                            <View style={styles.inputView}>
                                <Text>Preço: </Text>
                                <TextInput
                                    placeholder="R$: "
                                    keyboardType="numeric"
                                    style={styles.input} />
                            </View>
                        </View>

                        <View style={styles.outerInfoBox}>
                            <View style={styles.infoBox}>

                            </View>
                        </View>

                        <View style={styles.botoes}>
                            <Button title='Cancelar' style={styles.botao} />
                            <Button title='Salvar' style={styles.botao} />
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
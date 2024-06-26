import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './login'
import { Input } from '../../components/AluraComponents/Input'
import { ButtonsLogin } from "../../components/AluraComponents/ButtonsLogin"

export const Alura = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleMainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleAlura}>alura</Text>
                    <Text style={styles.versao}>v453-183</Text>
                </View>
                <View>
                    <Text style={styles.titlePergunta}>Já estuda com a gente?</Text>
                    <Text style={styles.titleChamada}>Faça seu login e boa aula!</Text>
                </View>
            </View>

            <View style={styles.formContainer}>
                <Input title="E-mail" keyBoardType="email-adress" />
                <Input title="Senha" secureTextEntry={true} />
                <ButtonsLogin />
            </View>

        </View>
    )
}

export default Alura;
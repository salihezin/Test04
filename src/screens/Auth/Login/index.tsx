import React, { useState } from 'react';
import { Text, View, Pressable, Dimensions, TextInput, StyleSheet, Image, } from 'react-native';
import LoginLogic from './logic';

const _w = Dimensions.get('window').width
const _h = Dimensions.get('window').height

function LoginView(): JSX.Element {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const logic = LoginLogic({ username, password })

    return (
        <View style={styles.body}>
            <View style={styles.stackArea}>
                <Image
                    source={require('../../../../assets/img/Auth/locked.png')}
                    style={{height:_h}} />
            </View>
            <View style={styles.stackLogin}>
                <Text style={styles.loginText}>GİRİŞ</Text>
                <View style={styles.inputsView}>
                    <TextInput
                        style={styles.input}
                        placeholder="E-Mail"
                        selectionColor={"#f2f2f2"}
                        placeholderTextColor={"#f2f2f2"}
                        onChangeText={(value) => setUsername(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Şifre"
                        selectionColor={"#f2f2f2"}
                        placeholderTextColor={"#f2f2f2"}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <View style={styles.buttonView}>
                        <Pressable onPress={logic.loginToFirebase}>
                            <Text style={styles.loginButtonText}>GİRİŞ YAP</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.registerView}>
                    <Pressable onPress={logic.goToRegister}>
                        <Text style={styles.registerText}>Yeni Kayıt {'>>'}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LoginView


const styles = StyleSheet.create({
    body: {
        alignItems: "center",
    },
    stackArea: {
        backgroundColor: "#f2f2f2",
        height: _h / 3,
        width: _w,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    stackLogin: {
        position: "absolute",
        backgroundColor: "rgba(13, 13, 13, 0.9)",
        width: _w * 0.9,
        height: _h * 0.7,
        marginTop: _h * 0.1,
        borderRadius: 40,
    },
    loginText: {
        textAlign: "center",
        color: "#f2f2f2",
        fontSize: 36,
        fontWeight: "bold",
        marginTop: _w * 0.03
    },
    inputsView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 5
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#f2f2f2",
        color: "#f2f2f2",
        width: _w * 0.85,
        padding: 12,
        marginHorizontal: 12,
        marginBottom: 25,
    },
    buttonView: {
        backgroundColor: "#f2f2f2",
        width: _w * 0.85,
        borderRadius: 20,
    },
    loginButtonText: {
        textAlign: "center",
        fontSize: 36,
        color: "#0d0d0d",
    },
    registerView: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flex: 1
    },
    registerText: {
        backgroundColor: "#f2f2f2",
        padding: 12,
        borderRadius: 20
    }
})
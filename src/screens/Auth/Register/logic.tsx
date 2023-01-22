import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Alert } from "react-native"
import auth from '@react-native-firebase/auth'


type RegisterProps = { username: string, password: string, passwordAgain: string }
type StackParamList = { Login: undefined, Home: undefined };

const RegisterLogic = (props: RegisterProps) => {
    const { navigate, replace } = useNavigation<StackNavigationProp<StackParamList>>()
    const goToLogin = () => navigate('Login')

    const createAnUser = () => {
        if (props.password.length < 6) {
            Alert.alert("Kısa Şifre", "Şifreniz 6 karakterden az olamaz.")
        } else if (props.password != props.passwordAgain) {
            Alert.alert("Şifre", "Şifreler aynı olmalı")
        } else {
            auth().createUserWithEmailAndPassword(props.username, props.password)
                .then(() => {
                    auth().signInWithEmailAndPassword(props.username, props.password)
                        .then(() => {
                            replace('Home')
                        })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('EMAİL HATASI', 'Bu mail ile daha önce kayıt olunmuş.')
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('EMAİL HATASI', 'Hatalı mail adresi girdiniz.')
                    }
                    Alert.alert("Kayıt Başarısız", "Lütfen tekrar deneyin.")
                });
        }
    }
    return { goToLogin, createAnUser }
}

export default RegisterLogic

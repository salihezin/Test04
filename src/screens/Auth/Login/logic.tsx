import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Alert } from "react-native"
import auth from '@react-native-firebase/auth'


type LoginProps = { username: string, password: string }
type StackParamList = { Register: undefined, Home: undefined };

const LoginLogic = (props: LoginProps) => {
    const { navigate, replace } = useNavigation<StackNavigationProp<StackParamList>>()
    const goToRegister = () => navigate('Register')
    const loginToFirebase = () => {
        if (props.password.length < 6) {
            Alert.alert("Kısa Şifre", "Şifreniz 6 karakterden az olamaz.")
        } else {
            auth().signInWithEmailAndPassword(props.username, props.password)
                .then((user) => {
                    replace('Home')
                    console.log('user is : ', user.user)
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('EMAİL HATASI', 'Hatalı mail adresi girdiniz.')
                    }
                    else if (error.code === 'auth/user-not-found') {
                        Alert.alert('KULLANICI YOK HATASI', 'Böyle bir mail ile bu uygulamada kayıt olunmadı.')
                    }
                    else if (error.code === 'auth/wrong-password') {
                        Alert.alert('PAROLA HATASI', 'Şifre yanlış')
                    }
                    else {
                        Alert.alert("Giriş Yapılamadı", "Kullanıcı bilgileriniz doğrulanamadı.")
                    }
                });
        }
    }
    return { goToRegister, loginToFirebase }
}

export default LoginLogic

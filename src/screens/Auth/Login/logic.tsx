import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Alert } from "react-native"
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUserDetail } from "../../../store/User/3_actions"
import _ from "lodash"
import { Dispatch, AnyAction } from "redux"


type LoginProps = { username: string, password: string }
type StackParamList = { Register: undefined, Home: undefined };

const LoginLogic = (props: LoginProps) => {
    const { navigate, replace } = useNavigation<StackNavigationProp<StackParamList>>()
    const goToRegister = () => navigate('Register')
    const dispatch = useDispatch()
    
    const loginToFirebase = () => {
        if (props.password.length < 6) {
            Alert.alert("Kısa Şifre", "Şifreniz 6 karakterden az olamaz.")
        } else {
            loginSuccess(props, dispatch, replace)
        }
    }
    return { goToRegister, loginToFirebase }
}


export default LoginLogic


function loginSuccess(props: LoginProps, dispatch: Dispatch<AnyAction>, replace: <RouteName extends keyof StackParamList>(...args: undefined extends StackParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: StackParamList[RouteName]] : [screen: RouteName, params: StackParamList[RouteName]]) => void) {
    auth().signInWithEmailAndPassword(props.username, props.password)
        .then((user) => {
            setDisplayName(user, dispatch)
            dispatch(setUser({
                email: user.user.email,
                uid: user.user.uid,
            }))
            dispatch(setUserDetail({ displayName: user.user.displayName }))
            replace('Home')

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
                console.log('error', error)
            }
        })
}

function setDisplayName(user: FirebaseAuthTypes.UserCredential, dispatch: Dispatch<AnyAction>) {
    if (_.isNull(user.user.displayName)) {
        user.user.updateProfile({ displayName: user.user.email?.split('@')[0] }).then(
            () => dispatch(setUserDetail({ displayName: user.user.displayName }))
        ).catch(
            error => console.log('error', error)
        )
    }
}


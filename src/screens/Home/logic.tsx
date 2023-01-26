import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

type StackParamList = { AddCredit: undefined };

const HomeLogic = () => {

    const { navigate, replace } = useNavigation<StackNavigationProp<StackParamList>>()
    const goToAddCredit = () => navigate('AddCredit')
    return { goToAddCredit }
}
export default HomeLogic
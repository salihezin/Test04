import { Text, View, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { setUser } from '../../store/User/3_actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { useForm, Controller } from "react-hook-form";
import { FlatList } from 'react-native-gesture-handler';

function AddCreditView(props: AppProps): JSX.Element {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            creditName: '',
            installment: '',
            howManyLeft: '',
            paymentPeriod: ['Gün', 'Hafta', 'Ay', 'Yıl'],
            frequency: ''
        }
    })
    const preForm = [{
        creditName: '',
        installment: '',
        howManyLeft: '',
        paymentPeriod: '',
        frequency: ''
    }]
    const onSubmit = handleSubmit(data => console.log(data));
    console.log('props', props)
    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => {
                    console.log('value', value)
                    return (
                        <TextInput
                            style={{
                                borderWidth: 1,
                                margin: 8
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    );
                }}
                name="creditName"
            />
            {errors.creditName && <Text>This is required.</Text>}
            <FlatList
                data={preForm} 
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.creditName}</Text>
                        </View>
                    )
                }}
                />
        </View>
    )

}

const mapStateToProps = (state: AppState) => ({
    user: state.user,
    userDetail: state.userDetail,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ setUser }, dispatch);
type AppProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(AddCreditView)

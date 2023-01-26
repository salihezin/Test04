import { Text, View, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { setUser } from '../../store/User/3_actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { useForm, Controller } from "react-hook-form";

function AddCreditView(props: AppProps): JSX.Element {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    })
    const onSubmit = handleSubmit(data => console.log(data));
    console.log('props', props)
    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={{
                            borderWidth:1,
                            margin:8
                        }}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}
            <Text>SALİH</Text>
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

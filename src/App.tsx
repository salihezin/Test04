import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login'
import { Provider } from 'react-redux';
import configureStore from './store';
import Register from './screens/Auth/Register';
import Home from './screens/Home';
import AddCredit from './screens/AddCredit';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    AddCredit: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>()
const Store = configureStore()
function App(): JSX.Element {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <RootStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName='Login'>
                    <RootStack.Screen
                        name='Login'
                        component={Login}
                    />
                    <RootStack.Screen
                        name='Register'
                        component={Register}
                    />
                    <RootStack.Screen
                        name='Home'
                        component={Home}
                    />

                    <RootStack.Screen
                        name='AddCredit'
                        component={AddCredit}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;

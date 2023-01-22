import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login'
import { Provider } from 'react-redux';
import Store from './settings/store';
import Register from './screens/Auth/Register';
import Home from './screens/Home';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined
  };

const RootStack = createStackNavigator<RootStackParamList>()
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
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;

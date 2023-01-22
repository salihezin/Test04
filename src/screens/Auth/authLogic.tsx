import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Alert } from 'react-native';

const [user, setUser] = useState({ email: "", password: "" });
const [initializing, setInitializing] = useState(true);

type AuthProps = { username: string, password: string }
type StackParamList = {
    Register: undefined
};

const AuthLogic = (props: AuthProps) => {
    const { navigate, replace } = useNavigation<StackNavigationProp<StackParamList>>()

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null as any;

    const signOut = () => auth().signOut()

    return { signOut }
}

export default AuthLogic
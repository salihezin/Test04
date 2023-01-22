import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable
} from 'react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const [todosList, setTodosList] = useState([{ title: "", isDone: false }])

  const getTodos = firestore().collection('todos').orderBy('isDone', 'asc')
    .get().then(querySnapshot => {
      let tmpList: any = [];
      querySnapshot.forEach(documentSnapshot => {
        tmpList.push(documentSnapshot.data());
      });
      setTodosList(tmpList);
    });

  const createAnUser = (username: string, password: string) => auth()
    .createUserWithEmailAndPassword(username, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

  const signIn = (username: string, password: string) => auth()
    .signInWithEmailAndPassword(username, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });

  const signOut = () => {
    console.log('sign out triggered')
    return auth().signOut().then(() => console.log('User signed out!'));
  };

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

  if (!user) {
    return (
      <View>
        <Text>YOU'RE NOT LOGGED IN</Text>
        <Pressable onPress={() => { signIn('test04@gmail.com', '123456') }}>
          <Text>Tap this for login</Text>
        </Pressable>
        <FlatList
          data={todosList}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
              <Text>{item.title}</Text>
              <Text>{item.isDone ? 'Yapıldı' : 'Yapılmadı'}</Text>
            </View>
          )} />
      </View>
    );
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {user.email}</Text>
      <Pressable onPress={signOut}>
        <View style={{ backgroundColor: "red", width: 100, height: 50, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", textAlign: "center" }}>Sign out</Text>
        </View>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { auth } from '../src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { styles } from '../src/styles';

export default function App() {
  
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const router = useRouter();

  function newUser() {
    router.replace('/newUser');
  }

  function RePass(){
    router.replace('/repass');
  }

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace('/inicial');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Não foi possível entrar no sistema. Tente novamente!!');
        router.replace('/inicial');
      })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>RH SER</Text>
      <StatusBar style="auto" />

      <TextInput style={styles.formInput}
      placeholder="Informe o E-mail"
      keyboardType="email-address"
      autoCapitalize="none"
      autoComplete="email"
      value={userMail}
      onChangeText={setUserMail}
      />

      <TextInput style={styles.formInput}
        placeholder="Informe a Senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />

      <Pressable style={styles.formButton}
        onPress={userLogin}
      >
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text 
            style={styles.subTextButton}
            onPress={RePass}
          >Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text
           style={styles.subTextButton}
           onPress={newUser}
           >Novo usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}



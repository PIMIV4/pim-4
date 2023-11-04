import { Text, View, TextInput, Pressable } from "react-native";
import { styles } from "../src/styles";
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function RePass(){
    const [userPass, setUserPass] = useState('');
    const [userRePass, setUserRePass] = useState('');
    const [userMail, setUserMail] = useState('');
    const router = useRouter();

    function repass(){
        if(userMail === '' || userPass === '' || userRePass === ''){
            alert('Todos os campos devem ser preenchaidos');
            router.replace('/');
            return;
        }
        if(userPass !== userRePass){
            alert('As senhas não são compatíveis');
            router.replace('/');
            return;
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Esqueci a senha</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Informe o e-mail do usuário'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={userMail}
                onChangeText={setUserMail}
            />
            <TextInput
                 style={styles.formInput}
                 placeholder='Digite a nova senha'
                 autoCapitalize='none'
                 secureTextEntry
                 value={userPass}
                onChangeText={setUserPass}
            />
             <TextInput
                 style={styles.formInput}
                 placeholder='Digite novamente a senha'
                 autoCapitalize='none'
                 secureTextEntry
                 value={userRePass}
                 onChangeText={setUserRePass}
             />
              <Pressable
                style={styles.formButton}
                onPress={repass}
            >
                <Text style={styles.textButton}>
                    Cadastrar nova senha  
                </Text>
            </Pressable>
        </View>
    );
}
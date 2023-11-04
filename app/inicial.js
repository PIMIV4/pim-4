
import { Pressable, Text, View, TextInput} from "react-native";
import { styles } from "../src/styles";
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Home() {
    const router = useRouter();

    function logout() {
        alert("Você se desconectou do sistema");
        router.replace('/');
    }
    function beneficios() {
        router.replace('/beneficios');
    }
    function inicial() {
        router.replace('/inicial');
    }
    function ausencia() {
        router.replace('/ausencia');
    }
    function horas() {
        router.replace('/horas');
    }
    function CadastroFunc() {
        alert("Funcionário cadastrado com sucesso!!");
    }


    return (
        <View style={styles.internalContainer}>
            <View style={styles.topBar}>
                <Pressable
                    onPress={logout}
                >
                    <Ionicons name="log-out" size={32} color={'#4B0082'} />
                </Pressable>
                <Pressable
                    onPress={beneficios}
                >
                    <Ionicons name="card" size={32} color={'#4B0082'} />
                </Pressable>
                <Pressable
                    onPress={inicial}
                >
                    <Ionicons name="person-add" size={32} color={'#4B0082'} />
                </Pressable>
                <Pressable
                    onPress={ausencia}
                >
                    <Ionicons name="calendar" size={32} color={'#4B0082'} />
                </Pressable>
                <Pressable
                    onPress={horas}
                >
                    <Ionicons name="time" size={32} color={'#4B0082'} />
                </Pressable>
            </View>
            <Text style={styles.TextFunc}>Cadastro de Funcionários</Text>
            <TextInput
                style={styles.formFunc}
                placeholder='Nome do funcionário'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.formFunc}
                placeholder='E-mail do funcionário'
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
            />
             <TextInput
                 style={styles.formFunc}
                 placeholder='Digite o CPF'
                 autoCapitalize='none'
                 keyboardType='numeric'
             />
               <TextInput
                 style={styles.formFunc}
                 placeholder='Número de Telefone'
                 autoCapitalize='none'
                 keyboardType='numeric'
             />
               <TextInput
                 style={styles.formFunc}
                 placeholder='Departamento'
                 autoCapitalize='none'
             />
                <TextInput
                 style={styles.formFunc}
                 placeholder='Cargo'
                 autoCapitalize='none'
             />
             <TextInput
                 style={styles.formFunc}
                 placeholder='Digite a nova senha'
                 autoCapitalize='none'
                 secureTextEntry
            />
            <TextInput
                 style={styles.formFunc}
                 placeholder='Confirme a senha'
                 autoCapitalize='none'
                 secureTextEntry
             />
            <Pressable
                style={styles.formButton}
                onPress={CadastroFunc}
            >
                <Text style={styles.textButton}>
                    Cadastrar funcionário 
                </Text>
            </Pressable>
        </View>
    );
}

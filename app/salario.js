import { Pressable, Text, View } from "react-native";
import { styles } from "../src/styles";
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Sal() {
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
            <Text style={styles.formTitle}>Cálculo de salário e descontos</Text>
        </View>
    )
}
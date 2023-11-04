import { Pressable, Text, View } from "react-native";
import { styles } from "../src/styles";
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Ausencia() {
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
    function lMedica() {
        alert("Licença Médica selecionada!");
    }
    function atraso() {
        alert("Atraso selecionado");
    }
    function falta() {
        alert("Falta selecionada");
    }
    function lMaternidade() {
        alert("Licença MAternidade selecionada");
    }
    function suspensao() {
        alert("Suspensão selecionada");
    }
    function exportar() {
        alert("Você exportou o comprovante de ausência. Clique enviar!");
    }
    function enviar() {
        alert("Comprovante enviado com sucesso!!");
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
            <Text style={styles.formTitle}>Comprovante de Ausência</Text>
            <Text style={styles.subtext}>Selecione a razão do comprovante:</Text>
            
            <Pressable
                onPress={lMedica}
            >
                <Text style={styles.formBene1}>Licença Médica</Text>
            </Pressable>

            <Pressable
                onPress={atraso}
            >
                <Text style={styles.formBene1}>Atraso</Text>
            </Pressable>

            <Pressable
                onPress={falta}
            >
                <Text style={styles.formBene1}>Falta</Text>
            </Pressable>

            <Pressable
                onPress={lMaternidade}
            >
                <Text style={styles.formBene1}>Licença Maternidade</Text>
            </Pressable>

            <Pressable
                onPress={suspensao}
            >
                <Text style={styles.formBene1}>Suspensão</Text>
            </Pressable>

            <Pressable
                onPress={exportar}
            >
                <Text style={styles.formAuseButton}>Exportar Arquivo</Text>
            </Pressable>

            <Pressable
                onPress={enviar}
            >
                <Text style={styles.formAuseButton}>Enviar</Text>
           </Pressable>

        </View>
    )
}
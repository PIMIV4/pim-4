import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTitle:{
      fontSize: 36,
      fontWeight: 'bold',
      color: 'blueviolet',
      margin: 10,
    },
    formInput: {
      borderColor: 'blueviolet',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 22,
      width: '80%',
      padding: 10,
      margin: 10,
    },
    formButton:{
      backgroundColor: 'blueviolet',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    textButton:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    subButton:{
      padding: 10,
    },
    subTextButton: {
      color: 'blueviolet',
    },
    //Telas Internas
    internalContainer:{
      flex: 1,
      alignItems: 'flex-start',
      paddingTop: 25,
    },
    topBar:{
      flexDirection:'row-reverse',
      padding: 10,
      backgroundColor: 'blueviolet',
      width: '100%',
      justifyContent: 'space-between',
    },
    topBarButtonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: '200',
    },
    TextFunc:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'blueviolet',
      margin: 10,
    },
    formFunc:{
      borderColor: 'blueviolet',
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 22,
      width: '80%',
      padding: 5,
      margin: 10,
      alignItems: 'center'
    },
    formBene:{
      backgroundColor: '#7B68EE',
      width: '90%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      fontSize: 22,
    },
    formdate:{
      backgroundColor: '#7B68EE',
      width: '50%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      fontSize: 22,
    },
    dateComponente:{
      width: 350
    },
    subtext:{
      color:'blueviolet',
      fontSize: 20,
    },
    formAuseButton:{
      backgroundColor: 'blueviolet',
      width: '90%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      fontSize: 22,
    },
    formBene1:{
      backgroundColor: '#7B68EE',
      width: '100%',
      margin: 10,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      fontSize: 18,
    },
  });
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Reset = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.rootContainer}>
        <View style={styles.imgCon}>
            <Image style={styles.img} source={require('../assets/Images/reset1.png')}/>
            <View style={styles.circularBorder}/>
        </View>
        <View style={styles.headerCon}>
        <Text style={styles.headerTxt}>Reset Your Password</Text>
        </View>
        <View style={styles.inputCon}>
            <TextInput
            style={styles.input}
            placeholder="New Password"
            keyboardType="default"
            secureTextEntry={true}
            autoCorrect={false}
            />
            <TextInput
            style={styles.input2}
            placeholder="Confirm Password"
            keyboardType="default"
            secureTextEntry={true}
            autoCorrect={false}
            />
            </View>
        <TouchableOpacity style={styles.btnCon} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnTxt}>DONE</Text>
        </TouchableOpacity>
        <View style={styles.iconCon}>
            <Image style={styles.icon} source={require('../assets/Images/done.png')} />
        </View>
    </ScrollView>
  );
};

export default Reset;

const styles = StyleSheet.create({
    rootContainer:{
        height:'100%',
        backgroundColor:'#a7c957',
    },
    headerCon:{
        marginTop:'10%',
        width:'50%',
        marginLeft:'29%',
    },
    headerTxt:{
        color:'#ffffff',
        fontSize:35,
    },
    imgCon:{
        marginTop:'20%',
        alignItems:'center',
        padding:'10%',
    },
    circularBorder:{
        position:'absolute',
        top:'10%',
        width: '45%',
        height: '140%',
        borderRadius: 200,
        backgroundColor: '#9e9e9e3d',
    },
    inputCon:{
        borderRadius:8,
        elevation:10,
        width:'85%',
        backgroundColor:'#f7f6f6',
        marginTop:'10%',
        marginHorizontal:'7%',

    },
    input:{
        borderBottomWidth:2,
        borderColor:'#cccccc',
        fontWeight:'bold',
    },
    input2:{
        fontWeight:'bold',
    },
    btnCon:{
        marginTop:'25%',
        marginLeft:'60%',
        width:'34%',
        height:'7%',
        backgroundColor:'#1376bc',
        borderRadius:50,
        padding:'4%',
        elevation:4,
    },
    btnTxt:{
        fontWeight:'bold',
        marginLeft:'7%',
        color:'#f7f6f6',
    },
    iconCon:{
        marginLeft:'83%',
        bottom:'5%',
    },
});

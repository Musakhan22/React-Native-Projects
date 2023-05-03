import { StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';

const EnterPhone = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor = "#ffffff" />
    <View style={styles.rootContainer}>
      <View style={styles.txtContainer}>
        <Text style={styles.text}>You'll receive a 4 digit code to verify next.</Text>
      </View>
      <View style={styles.inputCon}>
        <Text style={styles.inputTxt}>Enter your phone</Text>
        <TextInput
        style={styles.input}
         placeholder="number"
        keyboardType="number-pad"
        showSoftInputOnFocus={false}
        />
      </View>
      <View style={styles.btnCon}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default EnterPhone;

const styles = StyleSheet.create({
  rootContainer:{
    width:'90%',
    alignSelf:'center',
    backgroundColor:'#ffffff',
  },
  txtContainer:{
    // borderWidth:1,
    marginTop:'50%',
    width:'55%',
    paddingHorizontal:'5%',
  },
  text:{
    top:'10%',
    color:'#696868',
    fontWeight:'600',
    textAlign:'center',
  },
  inputCon:{
    width:'99%',
    height:'12%',
    marginTop:'10%',
    // borderWidth:1,
    elevation:4,
    backgroundColor:'#ffffff',
    borderRadius:20,
    paddingVertical:'3%',
  },
  input:{
    fontWeight:'bold',
    color:'#1a1919',
  },
  inputTxt:{
    fontSize:13,
    left:'2%',
  },
  btnCon:{
    marginTop:'10%',
    borderWidth:1,
    height:'10%',
    width:'40%',
    borderRadius:20,
    paddingVertical:'5%',
  },
  btn:{
  },
  btnTxt:{
    textAlign:'center',
  },
});

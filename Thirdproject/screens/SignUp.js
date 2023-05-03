import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerCon}>
       <Text style={styles.headerTxt}>Create New Account</Text>
       <Text style={styles.headerTxt1}>Please fill in the form to continue</Text>
      </View>
      <View style={styles.inputCon}>
        <TextInput
        placeholder="Full Name"
        autoCapitalize="sentences"
        />
      </View>
      <View style={styles.inputCon1}>
        <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="sentences"
        autoCorrect="false"
        />
      </View>
      <View style={styles.inputCon2}>
        <TextInput
        placeholder="Password"
        keyboardType="visible-password"
        autoCapitalize="none"
        autoCorrect="false"
        />
      </View>
      <View style={styles.bottomCon}>
      <TouchableOpacity style={styles.btnCon}>
        <Text style={styles.btnTxt}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.endCon}>
      <Text style={styles.txt}>Have an account?</Text>
      </View>
      <TouchableOpacity style={styles.endCon1}>
      <Text style={styles.txt1}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  headerCon:{
    alignItems:'center',
    marginTop:'15%',
  },
  headerTxt:{
    fontWeight:'bold',
    fontSize:17,
    color:'#060606',
  },
  headerTxt1:{
    marginTop:'2%',
    fontSize:12,
    marginLeft:'5%',
    paddingLeft:'2%',
    width:'50%',
  },
  inputCon:{
    marginTop:'17%',
    width:'90%',
    backgroundColor:'#eae4e990',
    borderRadius:15,
    marginHorizontal:'5%',
    paddingLeft:'4%',
  },
  inputCon1:{
    marginTop:'2%',
    width:'90%',
    backgroundColor:'#eae4e990',
    borderRadius:15,
    marginHorizontal:'5%',
    paddingLeft:'4%',
  },
  inputCon2:{
    marginTop:'2%',
    width:'90%',
    backgroundColor:'#eae4e990',
    borderRadius:15,
    marginHorizontal:'5%',
    paddingLeft:'4%',
  },
  bottomCon:{
    alignItems:'center',
    justifyContent:'center',
  },
  btnCon:{
    marginTop:'45%',
    width:'45%',
    height:'18%',
    backgroundColor:'#f05417',
    borderRadius:10,
    elevation:4,
    padding:'4%',
  },
  btnTxt:{
    color:'#ffffff',
    textAlign:'center',
  },
  endCon:{
    marginLeft:'29%',
    bottom:'4%',
  },
  txt:{},
  txt1:{
    color:'#f05417',
  },
  endCon1:{
    marginLeft:'59%',
    bottom:'7%',
  },
});

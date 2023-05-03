import { StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const Home = () => {
    const navigation = useNavigation();
  return (
      <>
      <StatusBar barStyle="light-content" backgroundColor={'#111111ff'}/>
      <ScrollView style={styles.rootContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.headerText}>dinisium</Text>
        </View>
        <View style={styles.logoCon}>
        <Image style={styles.logo} source={require('../assets/Images/logo.png')}/>
        </View>
        <View style={styles.emailCon}>
         <Text style={styles.emailText}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Enter Your Email"
          placeholderTextColor={'#c7c6c69b'}
          keyboardType="email-address"
          autoCorrect={false}
          />
        </View>
        <View style={styles.iconCon}>
        <Image style={styles.icon} source={require('../assets/Images/hide.png')}/>
        </View>
        <View style={styles.passwordCon}>
         <Text style={styles.passwordText}>Password</Text>
        <TextInput
         style={styles.passwordInput}
         placeholder="Enter Your Password"
         placeholderTextColor={'#c7c6c69b'}
         keyboardType="default"
         secureTextEntry={true}
         autoCorrect={false}
        />
        </View>
        <TouchableOpacity style={styles.forgetCon} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgetText}>Forget your password?</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.accountCon}>
          <Text style={styles.accountText}>already have an account ?</Text>
          <TouchableOpacity style={styles.underlineCon}>
          <Text style={styles.underlineText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </>
    );
  };

export default Home;

const styles = StyleSheet.create({
    rootContainer:{
        height:'100%',
        backgroundColor:'#1376bc',
      },
      textContainer:{
        marginLeft:width * 0.30,
        width:width * 0.48,
        borderColor:'#cccccc',
        top:height * 0.17,
        paddingLeft:width * 0.06,
      },
      headerText:{
        textAlign:'center',
        fontSize:height * 0.06,
        color:'#f6f5f5',
      },
      emailCon:{
        marginTop:height * 0.08,
        marginHorizontal:width * 0.04,
        padding:width * 0.02,
        width:'90%',
        height: '9%',
        borderBottomWidth:1,
        borderColor:'#dbdbdb',
      },
      passwordCon:{
        marginTop:height * 0.05,
        marginHorizontal:width * 0.04,
        padding:width * 0.02,
        height: '9%',
        width:'90%',
        borderBottomWidth:1,
        borderColor:'#dbdbdb',
      },
      iconCon:{
        marginLeft:'84%',
        top: '14.5%',
      },
      icon:{
      },
      logoCon:{
        marginTop:height * 0.07,
        marginLeft:width * 0.18,
        borderColor:'#cccccc',
      },
      logo:{
        height:height * 0.12,
        width:width * 0.20,
      },
      emailInput:{
        color:'#cccccc',
      },
      passwordInput:{
        color:'#cccccc',
      },
      btnContainer:{
        alignItems:'center',
        marginTop:height * 0.06,
      },
      loginBtn:{
        width:'90%',
        backgroundColor:'#f8f6f6',
        padding:'5%',
        borderRadius: width * 0.02,
      },
      btnText:{
        color:'#171717',
        textAlign:'center',
        fontWeight:'bold',
      },
      passwordText:{
        color:'#cccccc',
      },
      emailText:{
        color:'#cccccc',
      },
      forgetCon:{
        width:height * 0.28,
        borderColor:'#cccccc',
        marginLeft:width * 0.52,
      },
      forgetText:{
        fontSize:width * 0.04,
        color:'#cccccc',
      },
      accountCon:{
        marginLeft:width * 0.18,
        marginTop:height * 0.10,
      },
      accountText:{
        fontSize:width * 0.04,
        color:'#cccccc',
      },
      underlineCon:{
        width: width * 0.14,
        borderBottomWidth:1,
        borderColor:'#cccccc',
        marginLeft:width * 0.49,
        bottom:height * 0.035,
       },
      underlineText:{
        fontWeight:'bold',
        fontSize:width * 0.04,
        color:'#f2f0f0',
        width: width * 0.14,
      },
    });

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const Forgot = () => {
    const navigation = useNavigation();
  return (
            <View style={styles.rootContainer}>
              <View style={styles.imgCon}>
                <Image style={styles.img} source={require('../assets/Images/lock.png')}/>
                <View style={styles.circularBorder}/>
              </View>
              <View style={styles.ForgotCon}>
                <Text style={styles.ForgotTxt}>Forgot Your Password?</Text>
              </View>
              <View style={styles.InputCon}>
                <TextInput
                style={styles.input}
                placeholder="Type Your Email"
                placeholderTextColor={'#7d7d7d'}
                keyboardType="email-address"
                />
              </View>
              <TouchableOpacity style={styles.sendBtn} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.btnTxt}>SEND</Text>
              </TouchableOpacity>
              <View style={styles.mailCon}>
              <Image style={styles.mailIcon} source={require('../assets/Images/email.png')} />
              </View>
            </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
    rootContainer:{
        height:'100%',
        backgroundColor:'#1376bc',
      },
      btnContainer:{
        marginTop:'10%',
      },
      closeBtn:{
        marginLeft:'8%',
      },
      backBtn:{
      },
      InputCon:{
        borderRadius:8,
        elevation:10,
        width:'85%',
        backgroundColor:'#f7f6f6',
        marginTop:'1%',
        paddingLeft:'4%',
        marginHorizontal:'8%',
      },
      input:{
        fontWeight:'bold',
        fontSize:15,
      },
      sendBtn:{
        marginTop:'30%',
        marginLeft:'60%',
        width:'34%',
        height:'7%',
        backgroundColor:'#a7c957',
        borderRadius:50,
        padding:'4%',
        elevation:4,
      },
      btnTxt:{
        fontWeight:'bold',
        marginLeft:'7%',
        color:'#f7f6f6',
      },
      imgCon:{
        padding:'10%',
        marginTop:'30%',
        alignItems:'center',
      },
      img:{
        height:'35%',
        width:'20%',
      },
      ForgotCon:{
        bottom:'15%',
        marginLeft:'32%',
        width:'40%',
      },
      ForgotTxt:{
        fontSize:30,
        fontWeight:'400',
        color:'#f7f6f6',
      },
      mailCon:{
        marginLeft:'80%',
        bottom:'5.6%',
      },
      mailIcon:{
      },
      resetCon:{
        bottom:'12%',
        marginLeft:'25%',
        width:'50%',
        alignItems:'center',
      },
      resetText:{
        color:'#cccccca7',
        fontWeight:'400',
      },
      circularBorder:{
        position:'absolute',
        top:'10%',
        width: '40%',
        height: '65%',
        borderRadius: 200,
        backgroundColor: '#9e9e9e3d',
      },
});

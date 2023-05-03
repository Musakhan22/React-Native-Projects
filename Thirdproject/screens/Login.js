import { StyleSheet,View, Text, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
    <View style={styles.rootContainer}>
        <View style={styles.topCon}>
        <Text style={styles.topTxt}>Hello</Text>
        </View>
        <View style={styles.middleCon}>
            <Text style={styles.midTxt}>Welcome!</Text>
        </View>
        <View style={styles.inputCon}>
        <TextInput placeholder="Email" />
        </View>
        <View style={styles.inputCon2}>
        <TextInput placeholder="Password"/>
        </View>
        <View>
            <TouchableOpacity style={styles.btnCon}>
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.endCon}>
            <Text style={styles.endTxt}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.bottomCon}>
            <Text style={styles.bottomTxt1}>Google</Text>
        </View>
        <View style={styles.imgCon}>
        <Image style={styles.img} source={require('../assets/google..png')} />
        </View>
        <View style={styles.bottomCon1}>
            <Text style={styles.bottomTxt2}>Facebook</Text>
        </View>
        <View style={styles.img2Con}>
            <Image source={require('../assets/facebook.png')} />
        </View>
        <View style={styles.accountCon}>
            <Text style={styles.accountTxt}>Don't have an account?</Text>
        </View>
        <TouchableOpacity style={styles.accountCon1} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.accountTxt1}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    topCon:{
        marginTop:'10%',
    },
    topTxt:{
        fontSize:27,
        textAlign:'center',
        fontWeight:'bold',
        color:'#f05417',
    },
    middleCon:{
        marginTop:'20%',
        marginLeft:'8%',
    },
    midTxt:{
        fontSize:20,
        fontWeight:'700',
        color:'#595959c1',
    },
    inputCon:{
        borderRadius:15,
        width:'90%',
        backgroundColor:'#eae4e990',
        marginTop:'4%',
        paddingLeft:'4%',
        marginHorizontal:'5%',
        marginBottom:'1%',
    },
    inputCon2:{
        borderRadius:15,
        width:'90%',
        backgroundColor:'#eae4e990',
        marginTop:'1%',
        paddingLeft:'4%',
        marginHorizontal:'5%',
    },
    btnCon:{
     marginTop:'5%',
     marginLeft:'5%',
     width:'90%',
     height:'25%',
     backgroundColor:'#f05417',
     borderRadius:10,
     elevation:4,
    },
    btnTxt:{
        top:'23%',
        textAlign:'center',
        color:'#ffffff',
    },
    endCon:{
       alignItems:'center',
       left:'2%',
       bottom:'12%',
    },
    endTxt:{
        fontSize:13,
        fontWeight:'bold',
        color:'#f05417',
    },
    bottomCon:{
        borderWidth:1,
        borderRadius:15,
        borderColor:'#cccccc',
        height:'8%',
        width:'42%',
        marginLeft:'7%',
        bottom:'5%',
        padding:'4%',
    },
    bottomCon1:{
        borderWidth:1,
        borderRadius:15,
        borderColor:'#cccccc',
        height:'8%',
        width:'42%',
        marginLeft:'52%',
        bottom:'16.7%',
        padding:'4%',
    },
    bottomTxt1:{
        textAlign:'center',
        left:'4%',
        color:'#f05417',
        fontWeight:'bold',
    },
    imgCon:{
       left:'10%',
       bottom:'11%',

    },
    img2Con:{
        left:'55%',
        bottom:'22.7%',
    },
    img:{},
    bottomTxt2:{
        textAlign:'center',
        left:'3%',
        color:'#085782',
        fontWeight:'bold',
    },
    accountCon:{
        bottom:'7%',
        marginRight:'10%',
        alignItems:'center',
    },
    accountCon1:{
        bottom:'8.6%',
        marginLeft:'52%',
    },
    accountTxt1:{
        left:'29%',
        bottom:'49%',
        color:'#f05417',
        fontWeight:'bold',
    },
});

import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';

const GenerateOTP = () => {

  const inputref   = useRef();
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const [text, setText] = useState('');

function clearData(){
  if (inputref.current.isFocused()){
    ref_input1.current.clear();
    ref_input2.current.clear();
    ref_input3.current.clear();
  } else if (ref_input1.current.isFocused()){
    ref_input2.current.clear();
    ref_input3.current.clear();
  } else if (ref_input2.current.isFocused()){
    ref_input2.current.clear();
    ref_input3.current.clear();
  }
}

  return (
    <View style={styles.rootContainer}>
      <View>
        <Text></Text>
      </View>
      <View style={styles.inputCon}>
        <TextInput
        keyboardType="numeric"
        secureTextEntry={true}
        autoComplete="password"
        autoCorrect={false}
        returnKeyType={'next'}
        blurOnSubmit={false}
        onPressIn={() => clearData()}
        style={styles.input}
        maxLength={1}
        ref={inputref}
        value={text}
        onChangeText={(value) => {
          setText(value);
          if (value)  {ref_input1.current.focus();}
        }}
        />
      </View>
      <View style={styles.inputCon1}>
      <TextInput
        keyboardType="numeric"
        secureTextEntry={true}
        autoCorrect={false}
        returnKeyType={'next'}
        blurOnSubmit={false}
        onPressIn={() => clearData()}
        style={styles.input}
        maxLength={1}
        ref={ref_input1}
        onChangeText={(value) => {
          setText(value);
          if (value) {ref_input2.current.focus();}
        }}
        />
      </View>
      <View style={styles.inputCon2}>
      <TextInput
        keyboardType="numeric"
        secureTextEntry={true}
        autoCorrect={false}
        returnKeyType={'next'}
        blurOnSubmit={false}
        onPressIn={() => clearData()}
        style={styles.input}
        maxLength={1}
        ref={ref_input2}
        onChangeText={(value) => {
          setText(value);
          if (value) {ref_input3.current.focus();}
        }}
        />
      </View>
      <View style={styles.inputCon3}>
      <TextInput
        keyboardType="numeric"
        secureTextEntry={true}
        autoCorrect={false}
        returnKeyType={'next'}
        onPressIn={() => clearData()}
        style={styles.input}
        maxLength={1}
        ref={ref_input3}
        />
      </View>
       <View style={styles.btnCon}>
        <TouchableOpacity>
          <Text style={styles.btnTxt}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenerateOTP;

const styles = StyleSheet.create({
  rootContainer:{
   flex:1,
   alignItems:'center',
  },
  headerCon:{
    // borderWidth:1,
    marginTop:'15%',
  },
  headerTxt:{
    fontSize:15,
    fontWeight:'400',
    color:'#1a1919',
  },
  headerCon1:{
    // borderWidth:1,
    marginTop:'2%',
    marginLeft:'10%',
    width:'49%',
  },
  headerTxt1:{
    fontSize:13,
  },
  inputContainers:{
    flexDirection:'row',
    marginRight:'16%',
    justifyContent:'space-between',
    marginTop:'6%',
    height:'30%',
    width:'50%',
    paddingVertical:'10%',
    paddingHorizontal:'15%',
    margin:'3%',
    // borderWidth:1,
  },
  inputCon:{
    height:'20%',
    width:'50%',
    right:'38%',
    borderWidth:1,
    borderColor:'#737373',
    borderRadius:50,
    elevation:4,
    backgroundColor:'#ffffff',
  },
  input:{
    textAlign:'center',
  },
  inputCon1:{
    height:'20%',
    width:'50%',
    right:'20%',
    borderWidth:1,
    borderColor:'#737373',
    borderRadius:50,
    elevation:4,
    backgroundColor:'#ffffff',
  },
  inputCon2:{
    height:'20%',
    width:'50%',
    borderWidth:1,
    borderColor:'#737373',
    borderRadius:50,
    elevation:4,
    backgroundColor:'#ffffff',

  },
  inputCon3:{
    height:'20%',
    width:'50%',
    left:'23%',
    borderWidth:1,
    borderColor:'#737373',
    borderRadius:50,
    elevation:4,
    backgroundColor:'#ffffff',
  },
  endCon:{
  },
  btnCon:{
    top:'20%',
    width:'46%',
    height:'8%',
    backgroundColor:'#0b0b0b',
    borderRadius:30,
    elevation:4,
    paddingVertical:'4%',
  },
  btnTxt:{
    textAlign:'center',
    color:'#ffffff',
  },
});

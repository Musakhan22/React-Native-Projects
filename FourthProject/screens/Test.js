import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';


const Test = (props) => {
  const navigation = useNavigation();
  const value = [...props.route.params?.data];
  let [text, setText] = useState(0);
  // console.log(props.route.params, 'check');

  useEffect(() => {
    updateText();
  },[]);
  console.log(text);

  function updateText(){
    setTimeout(() => {
      setText(prev => prev + 1);
    }, 3000);
  }
  return (
    <View>
      <TouchableOpacity>
      <Text>{text}</Text>
      </TouchableOpacity>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('GetData',{
               tasks:props.route.params?.data,
            })} style={styles.btnCon}>
                <Text style={styles.btnTxt}>SEND</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  btnCon:{
    marginTop:'10%',
    marginLeft:'37%',
    height:'35%',
    width:'25%',
    backgroundColor:'#0b0b0b',
    borderRadius:10,
    elevation:4,
    paddingVertical:'4%',
  },
  btnTxt:{
    textAlign:'center',
    color:'#ffffff',
  },
  testCon:{
    alignItems:'center',
    position:'absolute',
  },
});

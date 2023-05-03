import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GetData = (props) => {
  const navigation = useNavigation();
  console.log(props.route.params, 'checking');
  return (
    <View>
    <View>
      {/* <Text>{props.route.params?.tasks}</Text> */}
        <TouchableOpacity style={styles.btnCon} onPress={() => navigation.navigate('TestData',{
          values:props.route.params?.tasks,
        })}>
            <Text style={styles.btnTxt}>SEND</Text>
        </TouchableOpacity>
    </View>
</View>
  );
};

export default GetData;

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
  });

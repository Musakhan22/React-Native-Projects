import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    // const navigation = useNavigation();
    function addTasks(){
        setTaskItems([...taskItems, task]);
        setTask(null);
    }
    function sendData(){
      navigation.navigate('Test',{
        data:taskItems,
      });
    }
  return (
    <View style={styles.rootContainer}>
    <View style={styles.InputCon}>
      <TextInput
      placeholder="Enter Something"
      placeholderTextColor={'#373737'}
      value={task}
      onChangeText={text => setTask(text)}
      />
    </View>
    <View style={styles.buttonsCon}>
    <TouchableOpacity style={styles.btnCon} onPress={() => addTasks()} >
        <Text style={styles.btnTxt}>ADD</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnCon2} onPress={() => sendData()}>
      <Text style={styles.btnTxt}>SEND</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
    },
    InputCon:{
        marginTop:'30%',
        borderWidth:1,
        borderColor:'#838181',
        backgroundColor:'#cccccc74',
        borderRadius:10,
        width:'90%',
        marginHorizontal:'5%',
        paddingLeft:'3%',
    },
         buttonsCon:{
          flexDirection:'row',
          marginLeft:'28%',
         },
        btnCon:{
            backgroundColor:'#0b0b0b',
            borderRadius:10,
            elevation:4,
            paddingVertical:'3%',
            marginTop:'10%',
             height:'67%',
              width:'27%',
          },
          btnTxt:{
            textAlign:'center',
            color:'#ffffff',
          },
          btnCon2:{
            backgroundColor:'#0b0b0b',
            borderRadius:10,
            elevation:4,
            paddingVertical:'3%',
            marginTop:'10%',
            marginLeft:'10%',
            height:'67%',
            width:'27%',
          },
});

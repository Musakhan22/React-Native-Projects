import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const TestData = (props) => {
  let data = [...props.route.params?.values];
  let [task, setTask] = useState(data);
  let [test, setTest] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setTest(data[0]);
  },[]);
   console.log(test);

  function updateTasks(){
    setTask('');
    setTask([...task, test]);
    setTest('');
    }

  return (
    <ScrollView>
    <View style={styles.rootCon}>
      <View>
      <FlatList
      data={task}
      keyExtractor={(item) => item.item}
      renderItem={(item,index) => {
      return (
      <View style={styles.line}>
        <Text style={styles.txt}>{item.item}</Text>
      </View>
        );
      }}
      />
      </View>
      <View style={styles.inputCon}>
        <TextInput
        placeholder={'enter text'}
        value={test}
        onChangeText={(value) => setTest(value)}
        />
      </View>
      <View style={styles.buttonsCon}>
        <TouchableOpacity style={styles.btnCon1} onPress={() => updateTasks()}>
          <Text style={styles.btnTxt}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon} onPress={() =>
          navigation.navigate('OutputScreen',{
             datas:task,
            })}>
            <Text style={styles.btnTxt}>SEND</Text>
        </TouchableOpacity>
    </View>
</View>
</ScrollView>
  );
};

export default TestData;

const styles = StyleSheet.create({
  rootCon:{
    flex:1,
  },
  buttonsCon:{
    flexDirection:'row',
    marginLeft:'7%',
    marginTop:'15%',
  },
  btnCon:{
    marginBottom:'10%',
    marginLeft:'20%',
    height:'49%',
    width:'25%',
    backgroundColor:'#0b0b0b',
    borderRadius:10,
    elevation:4,
    paddingVertical:'2%',
  },
  btnTxt:{
    textAlign:'center',
    color:'#ffffff',
  },
  btnCon1:{
    marginTop:'1%',
    marginLeft:'13%',
    height:'49%',
    width:'25%',
    backgroundColor:'#0b0b0b',
    borderRadius:10,
    elevation:4,
    paddingVertical:'2%',
  },
  inputCon:{
    marginTop:'30%',
    borderWidth:1,
    borderColor:'#838181',
    backgroundColor:'#cccccc74',
    borderRadius:10,
    width:'90%',
    marginHorizontal:'5%',
    paddingLeft:'3%',
  },
   buttonCon:{},
   editBtn:{},
   editTxt:{},
  line:{
      marginLeft:'30%',
      marginTop:'15%',
      borderBottomWidth:2,
      width: 140,
      borderColor:'#232323',
  },
  txt:{
    fontSize:20,
  },
  });

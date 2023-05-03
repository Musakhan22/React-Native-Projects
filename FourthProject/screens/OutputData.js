import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MultipleTexts from '../components/Text';
import { useNavigation } from '@react-navigation/native';

const OutputData = (props) => {
  const navigation = useNavigation();
  let itemsCopy = [...props.route.params?.datas];
  return (
    <View style={styles.rootCon}>
      {/* <Text>{itemsCopy}</Text> */}
        <FlatList
        style={styles.list}
        data={itemsCopy}
        key={'_'}
        keyExtractor={(item) => item.item}
        renderItem={(item,index) => {
           console.log(item);
          return (
            <View>
             <MultipleTexts text={item.item} key={item?.index} />
            </View>
          );
        }}
        />
        <View>
          <TouchableOpacity style={styles.btnCon} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnTxt}>Go To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default OutputData;

const styles = StyleSheet.create({
  rootCon:{
    flex:1,
  },
  list:{
    left:10,
  },
  btnCon:{
    marginBottom:'15%',
    marginLeft:'35%',
    width:'29%',
    height:'23%',
    borderRadius:10,
    backgroundColor:'#cccccc45',
    padding:'3%',
  },
  btnTxt:{
    textAlign:'center',
    color:'#1a1919',
  },
  outputCon:{
    marginLeft:'10%',
    marginTop:'20%',
    borderBottomWidth:1,
    borderColor:'#2d2d2d',
    width:'25%',
  },
  });

import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import React, { useState , useEffect } from 'react';

const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      dataFetch();
    }, []);
    const dataFetch = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            console.log('data',res.data);
            setData(res.data);
        })
        .catch(error => {console.log(error);});
    };
  return (
      <FlatList
      style={styles.list}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
            return (
                <View style={styles.rootContainer}>
                    <View style={styles.textContainer}>
                        <View style={styles.imageCon}>
                            <Image style={styles.image} source={{uri:item.url}} />
                        </View>
                        <View style={styles.titleCon}>
                            <Text numberOfLines={1} style={styles.titleText}>{item.title}</Text>
                        </View>
                    </View>
                </View>
            );
        }}
        />
  );
};

export default Data;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'#6c757d',
    },
    textContainer:{
       height: 310,
       padding:1,
       marginVertical:25,
       marginHorizontal:40,
       borderRadius:10,
    },
    titleCon:{
        position: 'absolute',
        marginLeft:4,
        marginTop:235,
        width: 306,
        height: 77,
        padding: 6,
        backgroundColor: '#0000001f',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    titleText:{
        paddingTop:20,
        marginLeft:5,
        color:'#111111',
        fontSize:15,
        fontWeight:'bold',
    },
    imageCon:{
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
      width: 310,
      height: 310,
      borderRadius: 10,
    },
});

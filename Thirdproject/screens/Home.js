import { Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import React, { useState } from 'react';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
    <View style={styles.rootContainer}>
        <View style={styles.iconCon}>
            <Image source={require('../assets/menu.png')}/>
        </View>
        <View style={styles.icon1Con}>
        <Image style={styles.icon1} source={require('../assets/search.png')} />
        </View>
        <View style={styles.headerCon}>
         <Text style={styles.headerTxt}>Your Courses</Text>
        </View>
        <View style={styles.imgCon}>
            <Image style={styles.img} source={require('../assets/user.png')} />
        </View>
        <View style={styles.barCon}>
        <Progress.Bar  progress={0.3} width={160} height={2} borderRadius={1} color={'#fb5607'} borderColor={'#b4b3b38e'} unfilledColor={'#cccccc'} />
        </View>
        <View style={styles.TextCon}>
            <Text style={styles.progressTxt}>Overall progress</Text>
        </View>
        <View style={styles.card}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Text style={styles.cardTxt}>CODING</Text>
            <Text style={styles.cardTxt1}>Introduction to Javascript</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.card2} />
        <View style={styles.card2TxtCon}>
            <Text style={styles.card2Txt}>You haven't missed a class in three days!</Text>
        </View>
        <View style={styles.card3} />
        <View style={styles.card3TxtCon}>
            <Text style={styles.txt1}>CODING</Text>
            <Text style={styles.txt2}>Basics of HTML and CSS</Text>
            <Text style={styles.txt3}>In this course, we will learn the basic tools for coders.</Text>
        </View>
        <View style={styles.card4} />
        <View style={styles.card4TxtCon}>
        <Text style={styles.cardTxt4}>ARTICLE</Text>
            <Text style={styles.txt4}>Tips for Better Teamwork</Text>
        </View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
            <StatusBar backgroundColor={'#1D256E'} />
        <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.btnCon} onPress={() =>setShowModal(!showModal)}>
                <Image source={require('../assets/backbtn.png')}/>
            </TouchableOpacity>
            <View style={styles.icon2}>
            <Image source={require('../assets/activity.png')} />
            </View>
        <View style={styles.TopCon}>
         <Text style={styles.TopTxt}>CHAPTER 1</Text>
        </View>
        <View style={styles.Text2Con}>
            <Text style={styles.text2}>The basics of HTML and CSS</Text>
        </View>
        <View style={styles.cardCon}>
            <Image style={styles.img1} source={require('../assets/user1.png')} />
            <View style={styles.line1} />
            <Text style={styles.cardTxt2}>Document Structure</Text>
            <Text style={styles.cardTxt0}>Let's prepare the layout of the blog page. How do tags work?</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.Btntxt}>Start Lesson</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.bottomCon}>
            <Text style={styles.bottomTxt}>10 ways to take better lecture notes.</Text>
            <Text style={styles.bottomTxt1}>MORE</Text>
        </View>
        </View>
        </Modal>
        </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
    rootContainer:{
        height:'100%',
        backgroundColor:'#ffffff',
    },
    headerCon:{
        marginTop:'20%',
        marginLeft:'8%',
        width:'30%',
    },
    headerTxt:{
        fontSize:30,
        fontWeight:'700',
        color:'#1c1b1b',
    },
    iconCon:{
        top:'4%',
        left:'6%',
    },
    icon1Con:{
        left:'88%',
    },
    icon1:{
    },
    imgCon:{
        height:'11%',
        width:'20%',
        marginLeft:'75%',
        bottom:'10%',
        borderRadius:10,
        backgroundColor:'#85d9fd75',
    },
    img:{
        left:'8%',
        top:'14%',
    },
    barCon:{
        bottom:'8%',
        paddingLeft:'8%',
    },
    TextCon:{
        bottom:'7%',
        marginLeft:'9%',
    },
    progressTxt:{
        fontWeight:'500',
        color:'#adadad',
    },
    card:{
        bottom:'2%',
       marginLeft:'10%',
        width:'40%',
        height:'24%',
        borderRadius:12,
        backgroundColor:'#4CB1FF',
    },
    cardTxt:{
        top:'10%',
        paddingLeft:'7%',
        color:'#e0dede',
        fontSize:10,
    },
    cardTxt1:{
        top:'15%',
        left:'7%',
        fontWeight:'700',
        color:'#ffffff',
    },
    card2:{
        left:'55%',
        width:'40%',
        height:'32%',
        bottom:'20%',
        borderRadius:10,
        backgroundColor:'#d0d0d078',
    },
    card2TxtCon:{
        bottom:'45%',
        left:'60%',
        width:'27%',
    },
    card2Txt:{
        fontWeight:'700',
        color:'#0e0e0e',
    },
    card3:{
       left:'10%',
       bottom:'40%',
        width:'40%',
        height:'30%',
        borderRadius:10,
        backgroundColor:'#d0d0d078',
    },
    card3TxtCon:{
        top:'70%',
        left:'12%',
        position:'absolute',
    },
     txt1:{
        fontSize:10,
        left:'5%',
        top:'2%',
     },
     txt2:{
        top:'20%',
        left:'5%',
        width:'29%',
        fontWeight:'bold',
        color:'#0e0e0e',
     },
     txt3:{
        left:'4%',
        top:'29%',
        width:'35%',
        fontWeight:'600',
     },
    card4:{
        bottom:'55%',
        left:'55%',
        width:'40%',
        height:'10%',
        paddingVertical:'12%',
        paddingHorizontal:'7%',
        borderRadius:10,
        backgroundColor:'#d0d0d078',
    },
    card4TxtCon:{
        position:'absolute',
        left:'58%',
        top:'84%',
        height:'9%',
        padding:'3%',
    },
    cardTxt4:{
        color:'#a9a9a9',
        fontSize:10,
        fontWeight:'bold',
        paddingBottom:'3%',
    },
    txt4:{
        color:'#0e0e0e',
        fontSize:14,
        fontWeight:'bold',
        width:'60%',
    },
    modalContainer:{
        height:'100%',
        backgroundColor:'#1D256E',
      },
      TopCon:{
       bottom:'2%',
        marginLeft:'12%',
      },
      TopTxt:{
        fontSize:12,
        color:'#cccccc',
      },
      btnCon:{
        top:'0%',
        marginLeft:'4%',
        // borderBottomWidth:2,
        // borderColor:'#cccccc',
      },
      btnTxt:{
      },
      icon2:{
        left:'83%',
       bottom:'6%',
      },
      Text2Con:{
        top:'0.2%',
        marginLeft:'12%',
        width:'65%',
      },
      text2:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:28,
      },
      cardCon:{
        borderRadius:20,
        height:'50%',
        width:'75%',
        marginLeft:'14%',
        marginTop:'10%',
        backgroundColor:'#e7e8e9',
      },
      img1:{
        top:'10%',
        left:'30%',
        height:'40%',
        width:'40%',
      },
      cardTxt2:{
        top:'20%',
        left:'10%',
        fontWeight:'bold',
        fontSize:19,
        color:'#0e0e0e',
      },
      cardTxt0:{
        marginTop:'30%',
        left:'7%',
        width:'73%',
        paddingLeft:'4%',
        color:'#6b6b6b',
      },
      btn:{
      marginLeft:'33%',
      bottom:'16%',
      width:'35%',
      height:'25%',
      backgroundColor:'#fb8b24',
      borderRadius:50,
      elevation:4,
    },
      Btntxt:{
        top:'25%',
        fontSize:13,
        textAlign:'center',
        fontWeight:'bold',
        color:'#e3e2e2',
      },
      line:{
        top:'90%',
        width:'90%',
        marginHorizontal:'5%',
        position:'absolute',
        borderBottomWidth:0.9,
        borderColor:'#807f7f',
      },
      line1:{
        top:'50%',
        width:'50%',
        marginLeft:'18%',
        position:'absolute',
        borderBottomWidth:1.5,
        borderColor:'#0d0d0d',
      },
      bottomCon:{
        position:'absolute',
        top:'94%',
        marginLeft:'7%',
      },
      bottomTxt:{
        fontSize:12,
        color:'#828282',
      },
      bottomTxt1:{
        color:'#0077b6',
        marginLeft:'85%',
        bottom:'50%',
      },
});

import React,{Component} from "react";
import{
  View,StyleSheet,ImageBackground,Image,Text, TextInput,TouchableHighlight
  
}from 'react-native'
export default class App extends Component{
render(){
  return(
    <View style = {styles.container}>
    <ImageBackground source={require('./images/an5.jpeg')}
    style={styles.Image}>
      <Image source= {require('./images/food.jpg')} 
    style ={styles.icon}></Image>
  <Text style = {styles.text}>Come to Explore new food world</Text>
  <TextInput style ={styles.TextInput} placeholder='username'
  placeholderTextColor='gray' maxLength={10}>
    
  </TextInput>
  <TextInput style ={styles.TextInput} placeholder='password'
  placeholderTextColor='gray' secureTextEntry={true}>
    
  </TextInput>
  <TouchableHighlight style={styles.buttonview}>
    <Text style={styles.text1}>LOGIN</Text>
  </TouchableHighlight>
    </ImageBackground>
    
    </View>
  )
}
}
const styles = StyleSheet.create({
  container : {
    height : '100%',
    width : '100%',
    backgroundColor: '#6b0d1d'
   
  },
  Image : {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent:'center'
  },
  icon : {
    height : 100,
    width : 100
   
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  TextInput:
  {
    width:'80%',
    height:55,
    borderWidth:1,
    borderColor:'green',
    marginTop:50,
    paddingLeft:20
  },
  buttonview:{
    width:'60%',
    height:55,
    backgroundColor:'green',
    marginTop:30,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
    
  },
  text1:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
    color:'white'
   

  }
}) 
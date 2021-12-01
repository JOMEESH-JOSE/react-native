import React,{Component} from "react";
import{
  View,StyleSheet,ImageBackground,Image,Text
  
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
  }
}) 
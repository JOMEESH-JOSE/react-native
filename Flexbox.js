import React,{Component} from "react";
import{
    View,StyleSheet,Text,TouchableHighlight
} from 'react-native'
class FlexContent extends  Component{
    render(){
        return(
            <View>
                <Text style={styles.text1}>hi {this.props.name}</Text>
            </View>
        )
    }
}
export default class Flexbox extends Component
{
    constructor(){
        super();
        this.state = {
            main_text : "jomeesh",
            subtext : "coming"
        }
    }
    update_text(){
        this.setState({
            main_text : 'JMJ',
            subtext:'come'
            
        })
    }
    render(){
        return(
           <View style = {styles.container}>
            <Text style={styles.text}>{this.state.main_text}</Text>
            <Text style={styles.text}>{this.state.subtext}</Text>
            <TouchableHighlight style={styles.Button}
            underlayColor='red'
            onPress={()=>this.update_text()} >
                <Text style={styles.Button_text}>UPDATE</Text>
            </TouchableHighlight>
            <FlexContent name ='jomeesh' > 

            </FlexContent>
           </View>
           
        )
    }

}
const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        // flexDirection:'row'
    },
    text:{
        color:'black',
        fontSize:24  
    },
    Button:{
        height:50,
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        borderRadius:10,
        marginTop:20
    },
    Button_text:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center'


},
text1:{
    color:'blue',
    fontSize:24,
    marginTop:20 
}
})
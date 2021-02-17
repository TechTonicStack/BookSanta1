import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

export default class WelcomeScreen extends Component {
    constructor(){
        super();
        this.setState = {
            emailId:'',
            password:''
        }
    }
    render() {
        return(
            <View style = {StyleSheet.container}>
                <View>
                    <Text style = {styles.title}> Book Santa </Text>
                </View>

                <View>
                    <TextInput
                    style = {styles.loginBox}
                    placeholder = "abc@example.com"
                    keyboardType = 'email-address'
                    onChangeText = {(text)=> {
                        this.setState({
                        emailId:text
                    })
                }}
                />

                    <TextInput
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = "Enter Password"
                    onChangeText = {(text)=> {
                        this.setState({
                        password:text
                    })
                }}
                />
                </View>



            </View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F8BE85'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
      },
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },

})
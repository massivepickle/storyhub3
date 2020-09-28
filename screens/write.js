import React from 'react';
import { TextInput, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config';
import * as firebase from 'firebase';

export default class WriteScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        title: "",
        author: "",
        story: ""
      }
    }

    initiateWrite = async () => {
      await db.collection('list').add({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      });
      this.setState({
        title: "",
        author: "",
        story: ""
      });
      ToastAndroid.show("Your story has been submitted!", ToastAndroid.SHORT);
    }

    render() {
      return(
        <KeyboardAvoidingView behavior="height" enabled style={styles.container}>
          <Text style={{
              marginTop: 50,
              fontSize: 17.5
          }}>Story Title:</Text>
          <TextInput style={{
              borderWidth: 2,
              width: 200,
              height: 30,
              marginTop: 5
          }}
          onChangeText = {(text)=>{this.setState({title: text})}}
          value = {this.state.title}/>              
          
          <Text style={{
              marginTop: 20,
              fontSize: 17.5
          }}>Author:</Text>
          <TextInput style={{
              borderWidth: 2,
              width: 200,
              height: 30,
              marginTop: 5
          }}
          onChangeText = {(text)=>{this.setState({author: text})}}
          value = {this.state.author}/>

          <Text style={{
              marginTop: 20,
              fontSize: 17.5
          }}>Story:</Text>
          <TextInput style={{
              borderWidth: 2,
              width: 300,
              height: 200,
              marginTop: 5
          }}
          onChangeText = {(text)=>{this.setState({story: text})}}
          value = {this.state.story}/>
    
          <TouchableOpacity style = {{
            width: 100,
            height: 30,
            borderWidth: 1,
            marginTop: 30,
            backgroundColor: "lavender",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress = {async ()=>{this.initiateWrite();}}>
            <Text style={{
                fontSize: 20}}
            >SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        );
      }
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    }
  });
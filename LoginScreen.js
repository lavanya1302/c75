import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})
auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    Sign in
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    case 'auth/user-not-found':
        Alert.alert("user dosen't exists")
        console.log("doesn't exist")
        break
  });
  auth().signOut().then(function() 
    
  
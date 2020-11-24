import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BookIssuing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome issue your fav book here!!</Text>
      </View>
    );
  }
}
initiateBookIssue = async ()=>{
    //add a transaction
    db.collection("transaction").add({
      'studentId' : this.state.scannedStudentId,
      'bookId' : this.state.scannedBookId,
      'data' : firebase.firestore.Timestamp.now().toDate(),
      'transactionType' : "Issue"
    })

    //change book status
    db.collection("books").doc(this.state.scannedBookId).update({
      'bookAvailability' : false
    })
    //change number of issued books for student
    db.collection("students").doc(this.state.scannedStudentId).update({
      'numberOfBooksIssued' : firebase.firestore.FieldValue.increment(1)
    })

    this.setState({
      scannedStudentId : '',
      scannedBookId: ''
    })
  }


const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})
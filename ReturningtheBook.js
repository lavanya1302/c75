import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReturnTheBooks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Return the books here!!!</Text>
      </View>
    );
  }
}
initiateBookReturn = async ()=>{
    //add a transaction
    db.collection("transactions").add({
      'studentId' : this.state.scannedStudentId,
      'bookId' : this.state.scannedBookId,
      'date'   : firebase.firestore.Timestamp.now().toDate(),
      'transactionType' : "Return"
    })

    //change book status
    db.collection("books").doc(this.state.scannedBookId).update({
      'bookAvailability' : true
    })

    //change book status
    db.collection("students").doc(this.state.scannedStudentId).update({
      'numberOfBooksIssued' : firebase.firestore.FieldValue.increment(-1)
    })

    this.setState({
      scannedStudentId : '',
      scannedBookId : ''
    })
  }

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})
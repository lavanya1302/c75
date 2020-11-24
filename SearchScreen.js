import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Search Screen</Text>
      </View>
    );
  }
}
import React from 'react';
import { Text, View } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search</Text>
        </View>
      );
    }
  }

  searchTransactions= async(text) =>{
    var enteredText = text.split("")  
    if (enteredText[0].toUpperCase() ==='B'){
      const transaction =  await db.collection("transactions").where('bookId','==',text).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions:[...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
    else if(enteredText[0].toUpperCase() === 'S'){
      const transaction = await db.collection('transactions').where('studentId','==',text).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions:[...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
  }

  componentDidMount = async ()=>{
    const query = await db.collection("transactions").limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [],
        lastVisibleTransaction: doc
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
      <TextInput 
        style ={styles.bar}
        placeholder = "Enter Book Id or Student Id"
        onChangeText={(text)=>{this.setState({search:text})}}/>
        <TouchableOpacity
          style = {styles.searchButton}
          onPress={()=>{this.searchTransactions(this.state.search)}}
        >
          <Text>Search</Text>
        </TouchableOpacity>
        </View>
      <FlatList
        data={this.state.allTransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth: 2}}>
            <Text>{"Book Id: " + item.bookId}</Text>
            <Text>{"Student id: " + item.studentId}</Text>
            <Text>{"Transaction Type: " + item.transactionType}</Text>
            <Text>{"Date: " + item.date.toDate()}</Text>
          </View>
        )}
        keyExtractor= {(item, index)=> index.toString()}
        onEndReached ={this.fetchMoreTransactions}
        onEndReachedThreshold={0.7}
      /> 
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
import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import {Dropdown} from './components/Dropdown'


let categories = [
  {label: 'Food', value: 'food'},
  {label: 'Coffee', value: 'coffee'},
  {label: 'Transport', value: 'transport'},
  {label: 'Entertainment', value: 'entertainment'},
  {label: 'Groceries', value: 'groceries'},
  {label: 'Rent', value: 'rent'},
]

export default function App() {
  // states
  const [category, setCategory ] = useState()
  const [amount, setAmount ] = useState()

  const dropdownChange = (value) => {
    //console.log(value)
    setCategory(value)
  }
  const amountChange = (value) => {
    // console.log(value)
    setAmount(value)
  }
    return ( 
      <View style={styles.container}> 
        <Text>Money Tracker</Text>
        <View>
          <TextInput keyboardType="number-pad" style={styles.input} onChangeText={amountChange} />
          <Dropdown categories={categories} handler={dropdownChange} />
        </View>
      </View>
    )

    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop: 40,
        },
        input: {
          backgroundColor: '#cccccc',
          padding: 10,
          fontSize: 20,
        },
    });
import RNPickerSelect from 'react-native-picker-select'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export function Dropdown(props) {
    return ( 
    <View> 
        <RNPickerSelect onValueChange={props.handler} items={props.categories} />
    </View>
    )
}
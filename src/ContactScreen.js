import React, {useState, useEffect} from 'react';

// Import all required component
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import Contacts from 'react-native-contacts';
const ContactScreen = function(){

  Contacts.getAll().then(contacts => {
    // contacts returned
    console.log("hello==========================================")
    console.log(contacts.length)
  })
    return(
        <View style={style.container}>
            <Text>
                this is contact screen
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
        backgroundColor: '#ebebeb'
      }
})

export default ContactScreen;


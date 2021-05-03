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

  let [con, setContacts] = useState([]);
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
    Contacts.getAll().then(contacts => {
      // contacts returned
      console.log("heyyyyyy===================")
      contacts.map((item)=>{
        console.log(item.displayName)
        
      })
      //setContacts([...con,contacts])
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


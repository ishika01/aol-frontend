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
  const initialValue = [
    {
      name:"",
      index:0
    }
  ];
  const [con, setContacts] = useState(initialValue);
  useEffect(async ()=>{
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
      contacts.map((item,index)=>{
        //displaying from contacts db
        console.log(item.displayName+"====== "+index)
        //current name from contacts
        let nobj={name:item.displayName,index:index}
        console.log(nobj)
        let arr=con.push(nobj)
        //console.log(arr)
        setContacts([...con,nobj]);
        console.log(con.length);
        //console.log(con);
        
      })
    })
  },[])
  //issue ==>> displays 1
  console.log("=================================================");
  //console.log(con);
 
    return(
        <View style={style.container}>
            <Text>
                this is contact screen
            </Text>
            <Text>{con.length}</Text>
            <FlatList
              data={con}
              keyExtractor={(item)=>item.index}
              renderItem={({item})=>{
    
                   return(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                   )
               }}
            />


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


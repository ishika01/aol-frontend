import React, { useState, useEffect } from 'react';

// Import all required component
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar
} from 'react-native';
import Contacts from 'react-native-contacts';
import ListItemView from './component/ListItem'
const ContactScreen = function () {
  const initialValue = [
    {
      name: '',
      index: 0,
    },
  ];
  const [con, setContacts] = useState(initialValue);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    });
    Contacts.getAll().then(contacts => {
      // contacts returned
      const modififiedContacts = contacts.map((item, index) => {
        return { name: item.displayName, index: index };
      });
      setContacts(modififiedContacts);
    });
  }, []);
  //issue ==>> displays 1
  //console.log('=================================================');
  //console.log(con);

  return (
    <View style={style.container}>
      {/**uncomment the below code if you dont want to use flatlist */}
      {/**<ListItemView
      data={con}
      key={{item => item.index}}
      display={{item.name}={item.index}}
    /> */}
      <FlatList
        data={con}
        keyExtractor={item => item.index}
        renderItem={({ item }) => {
          return (
            <View style={style.item}>
              <Text style={style.title}>
                {item.name}={item.index}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default ContactScreen;

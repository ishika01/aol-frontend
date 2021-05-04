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
        return {name: item.displayName, index: index};
      });
      setContacts(modififiedContacts);
    });
  }, []);
  //issue ==>> displays 1
  console.log('=================================================');
  //console.log(con);

  return (
    <View style={style.container}>
      <Text>this is contact screen</Text>
      <Text>{con.length}</Text>
      <FlatList
        data={con}
        keyExtractor={item => item.index}
        renderItem={({item}) => {
          return (
            <View>
              <Text>
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
    margin: 10,
    backgroundColor: '#ebebeb',
  },
});

export default ContactScreen;

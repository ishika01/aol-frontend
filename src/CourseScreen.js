import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, TextInput,Paragraph, Dialog, Portal} from 'react-native-paper';
const CourseScreen = ({route, navigation}) => {
  //alter title here with course name
  navigation.setOptions({title: route.params.course_index});
  //console.log(route.params.course_index);

  const [UserContact, setUserContact] = useState('+91');
  const initialState = [
    {
      num: '123456789',
    },
  ];
  const [UserList, setUserList] = useState(initialState);
  const submitUserContacts = () => {
    const arr = {num: UserContact};
    setUserList([...UserList, arr]);
    alert('do you wish to add more ?');
  };
  console.log('UserList===>', UserList);

  return (
    <View>
      <Text>Course screen = {route.params.course_index} </Text>
      <View style={style.buttonViewContainer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Questions
        </Button>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Participants
        </Button>
      </View>
      <View style={style.buttonViewContainer}>
        <TextInput
          label="Contacts"
          mode="outlined"
          keyboardType="number-pad"
          value={UserContact}
          onChangeText={text => setUserContact(text)}
          style={{flex: 2}}
        />
        <View style={{flex: 1}}>
          <Button mode="contained" onPress={() => {submitUserContacts();}}>
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CourseScreen;

import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Button, TextInput, Paragraph, Dialog, Portal} from 'react-native-paper';
const CourseScreen = ({route, navigation}) => {
  //alter title here with course name
  navigation.setOptions({title: route.params.course_index});
  //console.log(route.params.course_index);
  //for flatlist
  const [visibleNumlist, setVisibleNumList] = useState(false);
  const showNumlist = () => {
      console.log(visibleNumlist);
    if (visibleNumView === true) {
      setVisibleNumList(false);
    } else {
      setVisibleNumList(true);
    }
  };
  //for dialogue
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  //
  const [visibleNumView, setVisibleNumView] = useState(false);
  const showNumView = () => {
    if (visibleNumView === true) {
      hideDialog();
      setVisibleNumView(false);
    } else {
      setVisibleNumView(true);
    }
  };
  //=============================================================
  const [UserContact, setUserContact] = useState('+91');
  const initialState = [
    {
      index: 0,
      num: '123456789',
    },
  ];
  const [UserList, setUserList] = useState(initialState);
  const submitUserContacts = () => {
    const length = UserList.length;
    const arr = {index: length, num: UserContact};
    setUserList([...UserList, arr]);
    showDialog();
  };

  //=============================================================
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
        <Button icon="plus" mode="contained" onPress={() => showNumView()}>
          Participants
        </Button>
      </View>

      <View style={style.buttonViewContainer}>
        {visibleNumView ? (
          <TextInput
            label="Contacts"
            mode="outlined"
            keyboardType="number-pad"
            value={UserContact}
            onChangeText={text => setUserContact(text)}
            style={{flex: 2}}
          />
        ) : null}
        <View style={{flex: 1}}>
          {visibleNumView ? (
            <Button
              mode="contained"
              onPress={() => {
                submitUserContacts();
              }}>
              Submit
            </Button>
          ) : null}
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Number has been added.</Paragraph>
            <Paragraph>Do you wish to add more ?</Paragraph>
          </Dialog.Content>
          <View style={style.buttonViewContainer}>
            <Dialog.Actions>
              <Button onPress={showNumView}>No</Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Yes</Button>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
      <Button
        mode="outlined"
        onPress={() => {
          showNumlist();
        }}>
        Show Participants
      </Button>
      {visibleNumlist ? (
        <FlatList
          data={UserList}
          keyExtractor={item => item.index}
          renderItem={({item}) => {
            return (
              <View>
                <Text>
                  {item.index}=={item.num}
                </Text>
              </View>
            );
          }}
        />
      ) : null}
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

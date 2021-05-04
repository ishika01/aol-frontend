import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import Section from './Section';
import SectionRaw from './SectionRaw';
//
import AsyncStorage from '@react-native-async-storage/async-storage';
//
import CallLogs from 'react-native-call-log';
import RecordAudio from './RecordAudio';

const filter = {
  phoneNumbers: '9273651956',
  // minTimestamp: 1554443524241,
  // maxTimestamp: 1556354485386,
};

export default function HomeScreen({navigation}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [singleFile, setSingleFile] = useState('');
  const [callLogs, setCallLogs] = useState([]);

  //================ Async code get item ==========================
  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('date')
        if(value !== null) {
        // value previously stored
        console.log(value)
        }
    } catch(e) {
        // error reading value
    }
}
//=======================================================
  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Call Log Example',
            message: 'Access your call logs',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          CallLogs.load(-1, filter)
            .then(c => setCallLogs(c))
            .catch(err => console.log(err));
        } else {
          console.log('Call Log permission denied');
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Section title="Admin">
          <Text h1>Enter a Question{'\n'}</Text>
        </Section>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={setQuestion}
            value={question}
            placeholder="Enter Question Here"
          />
        </View>
        <SectionRaw style={styles.container}>
          <Text style={styles.sectionDescription} h1>
            Answer Format{'\n'}
          </Text>
        </SectionRaw>
        <View style={styles.container}>
          <View style={styles.row}>
            <Button
              style={styles.button}
              title="Text"
              onPress={() => setSelectedFormat('TEXT')}
            />
            <Button
              style={styles.button}
              title="Camera"
              onPress={() => navigation.navigate('Camera')}
            />
            <Button
              style={styles.button}
              title="Attachment"
              onPress={() => setSelectedFormat('FILE')}
            />
            <Button
              style={styles.button}
              title="Logs"
              onPress={() => navigation.navigate('Logs', {callLogs: callLogs})}
            />
            <Button
              style={styles.button}
              title="Audio"
              onPress={() => setSelectedFormat('AUDIO')}
            />
            {/* add contact button*/ }
            <Button
              style={styles.button}
              title="Contacts"
              onPress={()=>navigation.navigate("Contacts")}
            />
            {/* add reminder button*/ }
            <Button
              style={styles.button_Reminder}
              title="Reminders"
              onPress={()=>navigation.navigate("Reminders")}
            />
          </View>
        </View>
        <Section title="User">
          <Text h1>
            {question && question} {'\n'}
          </Text>
        </Section>
        <View style={styles.container}>
          <Text>
            {question && selectedFormat === 'TEXT' && (
              <View style={styles.container}>
                <TextInput
                  style={styles.input}
                  onChangeText={setAnswer}
                  value={answer}
                  placeholder="Enter your Answer"
                />
              </View>
            )}
            {question && selectedFormat === 'FILE' && (
              <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                  onPress={selectOneFile}>
                  {/*Single file selection button*/}
                  <Text style={{marginRight: 10, fontSize: 19}}>
                    pick one file
                  </Text>
                  <Image
                    source={{
                      uri:
                        'https://img.icons8.com/offices/40/000000/attach.png',
                    }}
                    style={styles.imageIconStyle}
                  />
                </TouchableOpacity>
                {/* Attached Docs */}
                <ScrollView>
                  {/*Showing the data of selected Single file*/}
                  <Text style={styles.textStyle}>
                    File Name: {singleFile.name ? singleFile.name : ''}
                    {'\n'}
                    Type: {singleFile.type ? singleFile.type : ''}
                    {'\n'}
                    File Size: {singleFile.size ? singleFile.size : ''}
                    {'\n'}
                    URI: {singleFile.uri ? singleFile.uri : ''}
                    {'\n'}
                  </Text>
                </ScrollView>
              </View>
            )}

            {/* Audio Record */}
            {question && selectedFormat === 'AUDIO' && <RecordAudio />}
          </Text>
          <Text>async date</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  input2: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  button_Reminder:{
    
  }
});

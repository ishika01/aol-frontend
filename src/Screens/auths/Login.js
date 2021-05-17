import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  // If null, no SMS has been sent
  //const [confirm, setConfirm] = useState(true);
  const [phoneNumber, addPhoneNumber] = useState('+91');
  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length === 13) {
      navigation.navigate('VOTP', { phoneNumber });
    }
    else { alert("Please enter 10 digit phone number"); }

  };
  return (
    <View>
      <TextInput
        style={style.display}
        value={phoneNumber}
        onChangeText={(text) => {
          addPhoneNumber(text);
        }}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        style={style.btnContainer}
        onPress={() => {
          console.log(phoneNumber);
          GetOTP();
        }}
      >
        <Text style={style.btnText}>submit </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  display: {
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    width: 300,
    paddingLeft: 20,
    backgroundColor: 'azure',
    fontSize: 20,
  },
  btnContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Login;
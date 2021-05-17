import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
const VerifyOTP = ({ route: { params: { phoneNumber } }, navigation }) => {
    // If null, no SMS has been sent
    //const [confirm, setConfirm] = useState(true);
    const [otp, setOtp] = useState('');

    return (
        <View>
            <TextInput
                style={style.display}
                value={otp}
                onChangeText={text => setOtp(text)}
                keyboardType="number-pad"
            />
            <TouchableOpacity
                onPress={() => {
                    console.log('works');
                }}
                onLongPress={() => { console.log('long'); }}
            >
                <Text>
                    submit
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    display: {
        borderColor: 'black',
        borderWidth: 2,
    }
});
export default VerifyOTP;
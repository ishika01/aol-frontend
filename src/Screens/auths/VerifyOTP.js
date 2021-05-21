import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
const VerifyOTP = ({ route: { params: { phoneNumber } }, navigation }) => {
    // If null, no SMS has been sent
    //const [confirm, setConfirm] = useState(true);
    const [otp, setOtp] = useState('');
    //const [otpArray, setOtpArray] = useState(['', '', '', '']);
    const [confirm, setConfirm] = useState(null);


    useEffect(() => {
        signInWithPhoneNumber();
    }, []);
    
    async function signInWithPhoneNumber() {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

    async function confirmCode() {
        try {
            const code = otp;
            const response = await confirm.confirm(code);
            if (response) {
                console.log(response);
                navigation.navigate('Home');
            }
        } catch (e) {
            alert(JSON.stringify(e));
        }
    }

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
                    confirmCode();
                }}
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
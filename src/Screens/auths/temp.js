import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StyleSheet } from 'react-native';

const Login = () => {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(true);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    console.log(phone);
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        console.log('working');
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (confirm) {
        return (
            <View>
                <TextInput
                    style={style.display}
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    keyboardType="number-pad"
                />
                <Button
                    title="submit"
                    onPress={() => { setConfirm(false) }}
                />
            </View>
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} keyboardType="number-pad" />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}

const style = StyleSheet.create({
    display: {
        borderColor: 'black',
        borderWidth: 2,
    }
});
export default Login;
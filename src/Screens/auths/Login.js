import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    // If null, no SMS has been sent
    //const [confirm, setConfirm] = useState(true);
    const [phone, setPhone] = useState('');
    const submit = () => {
        navigation.navigate("VOTP");
    }
    return (
        <View>
            <TextInput
                style={style.display}
                value={phone}
                onChangeText={text => setPhone(text)}
                keyboardType="number-pad"
            />
            <TouchableOpacity
                onPress={() => {
                    console.log('works');
                    submit();
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
export default Login;
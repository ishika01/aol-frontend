import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../component/Spacer';

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [teacher, setTeacher] = useState(false);
    //are you a teacher if yes 2 option
    //else 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerkey}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Spacer>
                        <Text h3>Sign Up for App</Text>
                    </Spacer>
                    <Spacer />
                    <Input
                        label="Name"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Spacer />
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Spacer />
                    <Input
                        label="Phone"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="number-pad"
                    />
                    <Spacer />
                    <Button
                        title="Are you a teacher"
                        onPress={() => {
                            setTeacher(true);
                            alert(teacher);
                        }}
                    />
                    <Spacer />
                    <Spacer>
                        <Button title="Sign Up" />
                    </Spacer>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    containerkey: {
        flex: 1
    },
    inner: {
        padding: 16,
        flex: 1,
        justifyContent: "space-around"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SignupScreen;

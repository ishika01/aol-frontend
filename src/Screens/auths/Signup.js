import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Input, Button, ThemeProvider } from 'react-native-elements';
import Spacer from '../../component/Spacer';
import { TextInput } from 'react-native-paper';
import connectionApi from '../../api/connection';
const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [teacher, setTeacher] = useState(false);
    //are you a teacher if yes 2 option
    //create a post method to send data 
    const Signup = async () => {
        //const data = { phone: response.user._user.phoneNumber };
    }
    //else 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerkey}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <ThemeProvider>
                        <Spacer>
                            <Text h3>Sign Up for App</Text>
                        </Spacer>
                        <Spacer />
                        <TextInput
                            label="Name"
                            mode="outlined"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <TextInput
                            mode="outlined"
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput
                            mode="outlined"
                            label="Phone"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="number-pad"
                        />
                        <TextInput
                            mode="outlined"
                            label="Teacher Id"
                            value={teacherId}
                            onChangeText={setTeacherId}
                        />
                        <Spacer />

                        <Button
                            title="Are you a teacher"
                            onPress={() => {
                                setTeacher(true);
                                alert(teacher);
                            }}
                        />
                        <Button title="Sign Up" />

                    </ThemeProvider>
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
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
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

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ContactScreen = function(){
    return(
        <View style={style.container}>
            <Text>
                this is contact screen
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
        backgroundColor: '#ebebeb'
      }
})

export default ContactScreen;
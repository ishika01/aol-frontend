import React, { useState } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import DatePicker from 'react-native-date-picker'

const ReminderScreen = function(){
    const [date, setDate] = useState(new Date())
    return (
        <View>
            <Text>this rem screen</Text>
            <DatePicker
                date={date}
                onDateChange={setDate}
            />
        </View>
    )
}
const styles = StyleSheet.create({

})

export default ReminderScreen 

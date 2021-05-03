import React, { useState } from 'react'
import { Button, View, StyleSheet,Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ReminderScreen = function(){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [cdate,setDate]=useState('')
    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const d =date.toString()
        console.warn("A date has been picked: ", d);
        setDate(d);
        hideDatePicker();
    };
    console.log(cdate)
    console.log("=========================================")
    return (
    <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        />
        <Text>{cdate}</Text>
    </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
})

export default ReminderScreen 

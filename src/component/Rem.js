import React, { useState } from 'react'
import { Button, View, StyleSheet,Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Rem = function(props){
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
    <View style={styles.container}>
        <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.button}>{props.title}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{cdate}</Text>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        />
        
    </View>
    );

}
const styles = StyleSheet.create({
    text:{fontSize:24},
    button: {
        fontSize:18,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        //alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        backgroundColor:'#3483eb',
        width:150,
        height:40,
        color:'white',
        textAlign: 'center',
      },
     
})

export default Rem

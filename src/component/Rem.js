import React, { useState,useEffect } from 'react'
import { Button, View, StyleSheet,Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Rem = function(props){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [cdate,setDate]=useState('')
    const [prevdate,setprevdate]=useState('')
    //================================
    useEffect( async () => {
        try {
            const value = await AsyncStorage.getItem('date')
            if(value !== null) {
            // value previously stored
                setprevdate(value)
            }
        } catch(e) {
            // error reading value
        }
    },[])
    //================================
    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = async (date) => {
        try{
            const d =date.toString()
            console.warn("A date has been picked: ", d);
            await AsyncStorage.setItem('date',d)
            setDate(d);
            hideDatePicker();
        }catch(err){
            console.log(err)
        }
    };
    
    
    
  


    //console.log(cdate)
    //console.log("=========================================")
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.button}>{props.title}</Text>
            <Text style={styles.button}>{prevdate}</Text>
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

import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

const ListItemView = function (props) {
    return (
        <View>
            <FlatList
                data={props.data}
                keyExtractor={props.key}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>
                                {props.text}
                            </Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default ListItemView;
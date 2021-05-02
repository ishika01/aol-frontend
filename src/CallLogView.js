import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CallLogView({route}) {
  const {params} = route;
  const {callLogs} = params;
  return (
    <View style={styles.container}>
      <Text>{callLogs && callLogs.length}</Text>
      {callLogs &&
        callLogs.length > 0 &&
        callLogs.map((log, i) => (
          <View key={i}>
            <Text>Hi</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

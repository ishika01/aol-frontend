import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListItemView from './component/ListItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function CallLogView({route}) {
  const {params} = route;
  const {callLogs} = params;
  return (
    <View style={styles.container}>
      <Text>{callLogs && callLogs.length}</Text>
      {/* {callLogs &&
        callLogs.length > 0 &&
        callLogs.map((log, i) => (
          <View key={i}>
            <Text>Hi</Text>
          </View>
        ))} */}
      <View>
        <ListItemView data={DATA} />
      </View>
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

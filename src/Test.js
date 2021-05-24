import React, { useState,useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { FAB, TextInput, Card } from 'react-native-paper';
import { exp, Transition, Transitioning } from 'react-native-reanimated';

const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={200} />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
  );
const CreateCourse = () => {
  const initialValue = [
    {
      Cname: '',
      Cid: '',
      Cadd: '',
      index: 0,
    },
  ];
  const [course, setCourse] = useState(initialValue);
  const [fabstate, setFabstate] = useState(0);
  const [index, setIndex] = useState(0);
  const [C_Name, setC_Name] = useState('');
  const [C_Id, setC_Id] = useState('');
  const [C_Add, setC_Add] = useState('');


  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  //========================================================
  console.log(fabstate);

  const submitcourse = () => {
    const ind = course.length;
    console.log('ind == > ', ind);
    setFabstate(0);
    const arr = {
      Cname: C_Name,
      Cid: C_Id,
      Cadd: C_Add,
      index: ind,
    };
    setCourse([...course, arr]);
  };
  //========================================================
  console.log(course);
  return (
    <View  style={{ borderWidth: 2, borderColor: 'black', flex: 10 }}>
      {/*add a + bar*/}
      {fabstate === 0 ? (

        <View style={style.container}>
          <View style={{ borderWidth: 2, borderColor: 'black', flex: 10 }}>
          <Transitioning.View
      ref={ref}
      transition={transition}
      style={style.container}
     >
            <FlatList
                data={course}
                keyExtractor={item => item.index}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        style={style.touchstyle}
                        activeOpacity={0.9}
                        onPress={()=>{
                            console.log(item.index);
                            ref.current.animateNextTransition();
                            setCurrentIndex(item.index === currentIndex ? null : item.index);

                            }}
                        >
                        {/*<Text style={style.title}>
                            {item.Cname}=={item.index}
                        </Text>*/}
                        <View style={style.card}>
              <Text>{item.Cname}</Text>
              {item.index === currentIndex && (
                <View style={style.subCategoriesList}>
                  <Text>{item.index}=={item.Cname}</Text>
                </View>
              )}
            </View>
                    </TouchableOpacity>
                );
                }}
                />
                </Transitioning.View>
          </View>
          <View style={{borderWidth: 2, borderColor: 'black', flex: 2 }}>
            <FAB
                style={style.fab}
                icon="plus"
                onPress={() => setFabstate(1)}
            />
          </View>
        </View>
      ) : null}
      {fabstate === 1 ? (
        <View>
          {/** display a card with a submit button*/}
          <Text>Create New Course</Text>
          <Card>
            <TextInput
              label="Course Name"
              mode="outlined"
              value={C_Name}
              onChangeText={setC_Name}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              mode="outlined"
              label="CourseId"
              value={C_Id}
              onChangeText={setC_Id}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              mode="outlined"
              label="VenueAddress"
              value={C_Add}
              onChangeText={setC_Add}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Button
              title="submit"
              onPress={() => {
                setIndex(index + 1);
                submitcourse();
              }}
            />
            <Button
              title="cancel"
              onPress={() => {
                setFabstate(0);
              }}
            />
          </Card>
        </View>
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  touchstyle: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    height: 50,
    width: '80%',
    borderRadius: 4,
    backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  fab: {
    borderWidth: 5,
    position: 'absolute',
    margin: 16,
    right: 0,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});

export default CreateCourse;

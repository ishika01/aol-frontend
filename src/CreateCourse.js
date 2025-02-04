import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {FAB, TextInput, Card} from 'react-native-paper';
import {exp, Transition, Transitioning} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);
const CreateCourse = ({navigation}) => {
  const initialValue = [
    {Cadd: 'Course_Add', Cid: 'Course_id', Cname: 'Course_name', index: 0},
  ];
  const [course, setCourse] = useState(initialValue);
  const [fabstate, setFabstate] = useState(0);
  const [index, setIndex] = useState(0);
  const [C_Name, setC_Name] = useState('');
  const [C_Id, setC_Id] = useState('');
  const [C_Add, setC_Add] = useState('');
  const [adduser, setadduser] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  //========================================================
  console.log(fabstate);

  const submitcourse = () => {
    const ind = course.length + 1;
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
    <View style={{borderWidth: 2, borderColor: 'black', flex: 10}}>
      {/*add a + bar*/}
      {fabstate === 0 ? (
        <View style={style.container}>
          <View style={{borderWidth: 2, borderColor: 'black', flex: 10}}>
            <Transitioning.View
              ref={ref}
              transition={transition}
              style={style.container}>
              <FlatList
                data={course}
                keyExtractor={item => item.index}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={style.cardContainer}
                      activeOpacity={0.9}
                      onPress={() => {
                        console.log(item.index);
                        ref.current.animateNextTransition();
                        setCurrentIndex(
                          item.index === currentIndex ? null : item.index,
                        );
                      }}>
                      {/*<Text style={style.title}>
                            {item.Cname}=={item.index}
                        </Text>*/}
                      <View style={style.card}>
                        <Text>{item.Cname}</Text>
                        {/*this is how wr pass item object to a button prop */}
                        {item.index === currentIndex && (
                          <View style={style.subCategoriesList}>
                            <Text>Course Index == {item.index}</Text>
                            <Button
                              title="open course"
                              onPress={() => {
                                navigation.navigate('Course', {
                                  course_index: currentIndex,
                                });
                              }}
                            />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </Transitioning.View>
          </View>
          <View style={{borderWidth: 2, borderColor: 'black', flex: 2}}>
            <FAB style={style.fab} icon="plus" onPress={() => setFabstate(1)} />
          </View>
        </View>
      ) : null}
      {fabstate === 1 ? (
        <View>
          {/** display a card with a submit button*/}
          <Text>Create New Course</Text>
          <Card style={{margin: 20}}>
            <Text>assign start date and end date</Text>
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
  cardContainer: {
    flexGrow: 1,
  },
  touchstyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderWidth: 2,
    marginBottom: 10,
  },
  subCategoriesList: {
    marginTop: 20,
  },
});

export default CreateCourse;

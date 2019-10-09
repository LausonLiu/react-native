import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Alert, 
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import FlatTest from "./components/FlatTest"
// import FormTest from "./components/FormTest"

export default class App extends React.Component {

  render(){
    return (
      // <ScrollView>
      <View style={styles.container}>
        {/* <Text>表单组件</Text> */}
        {/* <FormTest></FormTest> */}
        <FlatTest></FlatTest>
      </View>
      // {/* </ScrollView> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

});

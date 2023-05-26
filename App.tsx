import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet, Modal, TextInput, StatusBar } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation';



const App = () => {
  
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      
      
      
       
    
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16,
  },
})



export default App
import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet, Modal, TextInput, StatusBar } from 'react-native';




const Title =({titleText})=>{

    return(
        <View>
           <Text style={styles.title}>{titleText}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:50,
        marginTop:"20%",
        marginLeft:"30%",
        fontWeight: 'bold',
        color:"red",
        textShadowColor: '#D50000',

    }

})
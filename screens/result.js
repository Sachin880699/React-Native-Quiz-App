import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Image, FlatList, StyleSheet, Modal, TextInput, StatusBar, TouchableOpacity } from 'react-native';




const Result =()=>{

    return(
        <View>
            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
            <Image source={{uri:"https://previews.123rf.com/images/abluecup/abluecup1209/abluecup120900898/15453951-quiz-a-man-is-pushing-the-button.jpg"}}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    
})
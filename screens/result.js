import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Image, FlatList, StyleSheet, Modal, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import Title from '../components/title';




const Result =({navigation,route})=>{
    
    const {score} = route.params 
    const resultBanner = score > 40? "https://w7.pngwing.com/pngs/895/695/png-transparent-trophy-gold-medal-winner-medal-gold-award-thumbnail.png":"https://www.onlygfx.com/wp-content/uploads/2020/05/fail-stamp-7.png"
    

    return(
        <View>
            
            <Title titleText="Result" />
            <Text style={styles.scoreValue}>{score}</Text>

            <View style={styles.bannerContainer}>
                <Image source={{uri:resultBanner}}
                style={styles.banner}
                />

            </View>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>Go To Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    button:{
        backgroundColor:"#1A759F",
        padding:11,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:"center",
        marginBottom:30,
        borderRadius:10,
        marginTop:"50%",
        marginLeft:20,
        width:"90%"
    },
    buttonText:{
        color:"white",
        fontSize:20,
        
    },
    scoreValue:{
        fontSize:24,
        fontWeight:"800",
        alignSelf:"center"
    }
    
})


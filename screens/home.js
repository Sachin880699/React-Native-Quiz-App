import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet,  TouchableOpacity, Image } from 'react-native';
import Title from '../components/title';




const Home =({navigation})=>{

    return(
        <View>
            
            <Title titleText="Quizzler" />

            <View style={styles.bannerContainer}>
                <Image source={{uri:"https://previews.123rf.com/images/abluecup/abluecup1209/abluecup120900898/15453951-quiz-a-man-is-pushing-the-button.jpg"}}
                style={styles.banner}
                />

            </View>
            <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("Quiz")}>
                <Text style={styles.buttonText}>start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

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
        
    }
    
    

})
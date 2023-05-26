import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet, Modal, TextInput, StatusBar, TouchableOpacity } from 'react-native';




const Quiz =({navigation})=>{
    const [questions,setQuestions] = useState()
    const [ques,setQues] = useState(0)
    const getQuiz = async()=>{
        const url = "https://opentdb.com/api.php?amount=10&type=multiple"
        const res = await fetch(url);
        const data = await res.json()
        setQuestions(data.results)

    }
    useEffect(()=>{
        getQuiz()
    },[])

    return(
        <View style={styles.container}>
            {
                questions && 
                <View style={styles.parent}>
                    <View style={styles.top}>
                <Text style={styles.question}>Q . Who is the Prime Minister of India</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Rahul Gandhi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Arvind Kejriwal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Manmohan Sing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Narendra Modi</Text>
                </TouchableOpacity>
                
                
            </View>
            <View style={styles.buttom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                
                >
                    <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Home</Text>
                </TouchableOpacity>

               

                
            </View>
                    </View>
            }
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:"100%"
    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1
    },
    buttom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    button:{
        backgroundColor:"#1A759F",
        padding:11,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:"center",
        marginBottom:30
    },
    buttonText:{
        fontSize:20,
        fontWeight:"600",
        color:"white"
    },
    question:{
        fontSize:28,

    },
    option:{
        fontSize:18,
        fontWeight:"500",
        color:"white"

    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:"#34A0A4",
        borderRadius:10,
        paddingHorizontal:12,

    },
    parent:{
        height:"100%"
    }


})
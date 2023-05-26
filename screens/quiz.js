import React, { useEffect, useState , useRef} from 'react';
import { Text, View, Button, FlatList, StyleSheet, Modal, TextInput, StatusBar, TouchableOpacity } from 'react-native';


const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const Quiz =({navigation})=>{
    const [questions,setQuestions] = useState()
    const [ques,setQues] = useState(0)
    const [options,setOptions] = useState([])
    const [score,setScore] = useState(0)

    const getQuiz = async()=>{
        const url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
        const res = await fetch(url);
        const data = await res.json()
        
        setQuestions(data.results)
        
        setOptions(generateOptionsAndShuffle(data.results[0]))

    }
    useEffect(()=>{
        getQuiz()
    },[])

    const handleNextPress =()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options = [..._question.incorrect_answers]

        options.push(_question.correct_answer)
        shuffleArray(options)
        
        return options
    }

    const handleSelectedOption =(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if(ques!==9){
            setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
        
    }

    const handleShowResult =()=>{
        navigation.navigate("Result",{
            score:score
        })
    }

    return(
        <View style={styles.container}>
            {
                questions && 
                <View style={styles.parent}>
                    <View style={styles.top}>
                <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.options} >
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
                
                
            </View>
            <View style={styles.buttom}>
                {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Prev</Text>
                </TouchableOpacity> */}

                    {ques!==9 && 
                    <TouchableOpacity style={styles.button} onPress={handleNextPress} >
                    <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>}


                    {ques===9 && 
                    <TouchableOpacity style={styles.button} onPress={handleShowResult} >
                    <Text style={styles.buttonText}>Show Result</Text>
                    </TouchableOpacity>}
                

                {/* <TouchableOpacity  style={styles.button}
                
                >
                    <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Home</Text>
                </TouchableOpacity> */}

               

                
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
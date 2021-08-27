import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import QuestionListTile from '../MyQuestions/QuestionListTile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../components/utilities/Colors'
import * as QuestionsAPI from '../../../api/questionAPI'

// import { Picker } from '@react-native-picker/picker'

export default function AllQuestions({ navigation }) {
    const [filter, setFilter] = useState('')
    const [questions, setQuestions] = useState({ loading: false, data: [] })


    function fetchAllQuestions() {
        QuestionsAPI.getAllQuestions()
            .then(response => {
                console.log(response)
                setQuestions({ loading: false, data: response })
            }).catch(error => {
                console.log(error)
            })
    }

    useLayoutEffect(() => {
        fetchAllQuestions()
        return () => {
            // cleanup
        };
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, marginBottom: 5 }}>
                <View style={styles.searchProduct}>
                    <Ionicons name='search' style={styles.searchIcon} color='#C0C0C0' size={20} />
                    <TextInput returnKeyType='search' style={styles.subSectionInput} placeholderTextColor='#C0C0C0' placeholder='Search questions' />
                </View>
                {/* <Text>OR</Text> */}
                {/* <View style={{ flex: 1, alignSelf: 'center', }}>
                    <Picker
                        selectedValue={filter}
                        onValueChange={
                            (value) => setFilter(value)
                        }>
                        <Picker.Item enabled={false} label="Select your filter" value={0} />
                        <Picker.Item label="Pending" value='1' />
                        <Picker.Item label="Answered" value='2' />
                    </Picker>
                </View> */}
            </View>
            <View style={{ marginTop: 10, flex: 1 }}>
                < FlatList
                    data={questions.data}
                    renderItem={({ item: question }) => <QuestionListTile question={question} navigation={navigation} key={question._id} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        paddingHorizontal: 5,
    },
    searchProduct: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        // contents
        display: 'flex',
        flexDirection: 'row'
    },
    searchIcon: {
        alignSelf: 'center',
        paddingLeft: 10
    },
    subSectionInput: {
        padding: 5,
        color: colors.primaryDark
    },
})

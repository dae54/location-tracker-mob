import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, RefreshControl, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import QuestionListTile from '../MyQuestions/QuestionListTile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../components/utilities/Colors'
import * as QuestionsAPI from '../../../api/questionAPI'
import { useQuestions } from '../../../context/QuestionsContext'
import Empty from '../../../components/utilities/Empty'

// import { Picker } from '@react-native-picker/picker'

export default function AllQuestions({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState('')


    const { getAllQuestions, allQuestions } = useQuestions()

    async function fetchAllQuestions() {
        setLoading(true)
        await getAllQuestions()
            .catch(error => {
                setError(error.messages)
            }).finally(() => {
                setLoading(false)
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
                {loading ?
                    <View>
                        <ActivityIndicator color='#ccc' animating size={30} />
                        <Text style={{ textAlign: 'center' }}>Plese wait...</Text>
                    </View>
                    :
                    allQuestions.length === 0 ?
                        <View>
                            <Empty />
                            {
                                error ?
                                    <View>
                                        <FeedbackHandler message={{ status: 'error', data: error }} />
                                        <TouchableNativeFeedback onPress={fetchAllQuestions}>
                                            <View style={{ width: 50, alignSelf: 'center', padding: 10, borderRadius: 5 }}>
                                                <Ionicons name='refresh' size={30} style={{ alignSelf: 'center' }} />
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ textAlign: 'center', fontSize: 16, width: '50%', alignSelf: 'center', marginTop: 30, textTransform: 'capitalize' }}>
                                            No questions have been added
                                        </Text>
                                        <TouchableNativeFeedback onPress={fetchAllQuestions}>
                                            <View style={{ width: 50, alignSelf: 'center', padding: 10, borderRadius: 5 }}>
                                                <Ionicons name='refresh' size={30} style={{ alignSelf: 'center' }} />
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                            }
                        </View>
                        :
                        < FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={fetchAllQuestions}
                                />
                            }
                            data={allQuestions}
                            renderItem={({ item: question }) => <QuestionListTile question={question} navigation={navigation} key={question._id} showStudent />}
                            keyExtractor={(item) => item._id}
                        />
                }
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

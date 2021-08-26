import React, { useState, useContext, useLayoutEffect, useRef } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import ChatTile from './ChatTile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../../../components/utilities/Colors'
import { useChat } from '../../../../../context/ChatContext'
import { useAuth } from '../../../../../context/AuthContext'

export default function QuestionChat({ question }) {
    const [message, setMessage] = useState('')
    const threadRef = useRef()


    const { questionThread, getQuestionsThread, sendMessage } = useChat()
    const { authData } = useAuth()
    console.log(questionThread)


    async function getThread() {
        getQuestionsThread(question._id)
            .catch(error => {
                console.log(error)
            })
    }

    async function handleSendMessage() {
        sendMessage({
            sender: authData._id,
            questionId: question._id,
            body: message
        })
            .then(() => setMessage(''))
            .catch(error => {
                console.log(error)
            })
    }

    useLayoutEffect(() => {
        getThread()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {questionThread.length === 0 ?
                <View style={{ flex: 1 }} >
                    <View style={{ elevation: 1, padding: 20, backgroundColor: 'white', margin: 5, justifyContent: 'center', flexGrow: 1 }}>
                        <Text style={{ textAlign: 'center', fontSize: 16 }}>Question is still being reviewed by our agents. Please wait for a respondent</Text>
                    </View>
                </View>
                :
                <>
                    <View style={{ flex: 1 }} >
                        <FlatList
                            ref={threadRef}
                            onContentSizeChange={() => threadRef.current.scrollToEnd({ animated: true })}
                            onLayout={() => threadRef.current.scrollToEnd({ animated: true })}
                            contentContainerStyle={{
                                paddingBottom: 10
                            }}
                            data={questionThread}
                            renderItem={({ item: chat }) => <ChatTile chat={chat} />}
                            keyExtractor={(item) => item._id}
                        />
                    </View>
                    <KeyboardAvoidingView>
                        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#C0C0C0', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={styles.searchProduct}>
                                <TextInput multiline returnKeyType='send' style={styles.subSectionInput} placeholderTextColor='#C0C0C0' placeholder='Type a message' value={message} onChangeText={(text) => setMessage(text)} />
                                {message.length === 0 &&
                                    <Ionicons name='attach' style={styles.searchIcon} color='#C0C0C0' size={20} />
                                }
                            </View>
                            <TouchableNativeFeedback onPress={handleSendMessage} disabled={message.length === 0}>
                                <View style={{ justifyContent: 'center', marginRight: 10, backgroundColor: 'white', height: 40, width: 40, borderRadius: 20, alignItems: 'center', elevation: 1 }}>
                                    <Ionicons name='send' color='#C0C0C0' size={15} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </KeyboardAvoidingView>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchProduct: {
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        // contents
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    searchIcon: {
        alignSelf: 'center',
        paddingLeft: 10,
    },
    subSectionInput: {
        padding: 5,
        color: colors.primaryDark,
        // width: '100%',
        flex: 1,
        borderRadius: 20
    },
})

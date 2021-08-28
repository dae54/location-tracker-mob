import React, { createContext, useState, useContext } from 'react';
import * as ChatAPI from '../api/chatAPI'
import { useNetwork } from './NetworkContext';
// import { useAuth } from './AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [questionThread, setQuestionThread] = useState([])
    const { isOnline } = useNetwork()

    // const { authData } = useAuth()

    const getQuestionsThread = async (questionId) => {
        setLoading(true)
        // RETRIEVE OFFLINE MESSAGES
        const pendingMessages = JSON.parse(await AsyncStorage.getItem('@pendingMessages'))
        const cachedMessages = JSON.parse(await AsyncStorage.getItem(`@${questionId}`))
        let pendingMessagesForThisQuestion = []


        if (pendingMessages) {
            pendingMessagesForThisQuestion = pendingMessages.filter(message => message.questionId === questionId)
            setQuestionThread(cachedMessages.concat(pendingMessagesForThisQuestion).sort((a, b) => moment().diff(a.sentAt, b.sentAt)))
        } else {
            if (cachedMessages)
                setQuestionThread(cachedMessages)
        }

        await ChatAPI.getQuestionsThread(questionId)
            .then(async response => {
                // SAVE NEW OFFLINE COPY OF THE MESSAGES
                await AsyncStorage.setItem(`@${questionId}`, JSON.stringify(response))

                if (!pendingMessages) {
                    setQuestionThread(response)
                    return
                }
                setQuestionThread(response.concat(pendingMessagesForThisQuestion).sort((a, b) => moment().diff(a.sentAt, b.sentAt)))
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    };
    const sendMessage = async (payload) => {
        setQuestionThread(questionThread.concat({ ...payload, pending: true, _id: Math.random(10000000), temp: true }))

        if (!isOnline) {
            const pendingMessages = JSON.parse(await AsyncStorage.getItem('@pendingMessages'))
            if (pendingMessages) {
                AsyncStorage.setItem('@pendingMessages', JSON.stringify(pendingMessages.concat({ ...payload, pending: true, _id: Math.random(10000000) })));
            } else {
                AsyncStorage.setItem('@pendingMessages', JSON.stringify([{ ...payload, pending: true, _id: Math.random(10000000) }]));
            }

            // await AsyncStorage.mergeItem(`@${payload.questionId}`, JSON.stringify({ ...payload, pending: true, _id: Math.random(10000000) }));

            // return handleofflineStorage()
            return
        }
        await ChatAPI.sendMessage(payload)
            .then(response => {
                // console.log(response)
                // [].filter((thread) => thread.questionId !== questioinId)
                setQuestionThread(questionThread.filter(thread => thread.temp !== true).concat(response))
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <ChatContext.Provider value={{ questionThread, loading, getQuestionsThread, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

function useChat() {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }

    return context;
}

export { ChatContext, ChatProvider, useChat };

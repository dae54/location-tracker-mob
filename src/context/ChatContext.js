import React, { createContext, useState, useContext } from 'react';
// import * as QuestionsAPI from '../api/questionAPI'
import * as ChatAPI from '../api/chatAPI'
// import { useAuth } from './AuthContext';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [questionThread, setQuestionThread] = useState([])

    // const { authData } = useAuth()

    const getQuestionsThread = async (questionId) => {
        setLoading(true)
        await ChatAPI.getQuestionsThread(questionId)
            .then(response => {
                // console.log(response)
                setQuestionThread(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    };
    const sendMessage = async (payload) => {
        await ChatAPI.sendMessage(payload)
            .then(response => {
                // console.log(response)
                setQuestionThread(questionThread.concat(response))
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

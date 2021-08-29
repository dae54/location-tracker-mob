import React, { createContext, useState, useContext } from 'react';
import * as QuestionsAPI from '../api/questionAPI'
import { useAuth } from './AuthContext';


const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
    const [userQuestions, setUserQuestions] = useState({ error: '', data: [] });
    const [allQuestions, setAllQuestions] = useState([]);
    const [loading, setLoading] = useState(false)

    const { authData } = useAuth()

    const getAllQuestions = async () => {
        setLoading(true)
        await QuestionsAPI.getAllQuestions()
            .then(response => {
                // console.log(response)
                setAllQuestions(response)
            }).catch(error => {
                throw error
            }).finally(() => {
                setLoading(false)
            })
    };
    const getUserQuestions = async () => {
        console.log(authData)
        setLoading(true)
        await QuestionsAPI.getUserQuestions(authData._id)
            .then(response => {
                setUserQuestions({ error: '', data: response })
            }).catch(error => {
                setUserQuestions({ error: error.message, data: [] })
            }).finally(() => {
                setLoading(false)
            })
    };

    const createQuestion = async (payload) => {
        await QuestionsAPI.createQuestion({ ...payload, user: authData._id })
            .then(response => {
                console.log(response)
                setUserQuestions({ error: '', data: [response].concat(userQuestions.data) })
            }).catch(error => {
                throw error
            })
    };

    return (
        <QuestionsContext.Provider value={{ allQuestions, userQuestions, loading, getAllQuestions, getUserQuestions, createQuestion }}>
            {children}
        </QuestionsContext.Provider>
    );
};

function useQuestions() {
    const context = useContext(QuestionsContext);

    if (!context) {
        throw new Error('useQuestions must be used within a QuestionsProvider');
    }

    return context;
}

export { QuestionsContext, QuestionsProvider, useQuestions };

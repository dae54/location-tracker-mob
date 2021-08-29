import React from 'react'
import { QuestionsProvider } from '../../../context/QuestionsContext'

import MyQuestions from './MyQuestions'

export default function MyQuestionsWrapper({ navigation }) {
    return (
        <MyQuestions navigation={navigation} />
    )
}

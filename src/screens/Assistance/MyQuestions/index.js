import React, { useState } from 'react'
import { QuestionsProvider } from '../../../context/QuestionsContext'

import MyQuestions from './MyQuestions'

export default function MyQuestionsWrapper({ navigation }) {
    return (
        <QuestionsProvider>
            <MyQuestions navigation={navigation} />
        </QuestionsProvider>
    )
}

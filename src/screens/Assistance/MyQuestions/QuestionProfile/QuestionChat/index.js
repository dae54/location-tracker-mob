import React, { useState, useContext } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import { ChatProvider } from '../../../../../context/ChatContext'
import Chat from './Chat'

export default function QuestionChat({ question }) {

    return (
        <ChatProvider>
            <Chat question={question} />
        </ChatProvider>
    )
}

const styles = StyleSheet.create({})

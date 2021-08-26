import React, { useLayoutEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FAB from '../../../components/reusables/FAB'
import colors from '../../../components/utilities/Colors'
import { useQuestions } from '../../../context/QuestionsContext'
import NewQuestion from './NewQuestion'
import QuestionListTile from './QuestionListTile'

export default function MyQuestions({ navigation }) {
    // const [questions, setQuestions] = useState({ loading: false, data: Array.from('daniel amani') })
    const { userQuestions, getUserQuestions } = useQuestions()
    // console.log('**************************')
    // console.log(userQuestions)
    // console.log('**************************')

    useLayoutEffect(() => {
        console.log('called')
        getUserQuestions()
    }, [])

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, marginBottom: 5 }}>
                <View style={{ flex: 1, alignSelf: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Questions Asked</Text>
                    <Text style={{ fontSize: 14, color: '#C0C0C0' }}>300</Text>
                </View>
                <View style={styles.searchProduct}>
                    <Ionicons name='search' style={styles.searchIcon} color='#C0C0C0' size={20} />
                    <TextInput returnKeyType='search' style={styles.subSectionInput} placeholderTextColor='#C0C0C0' placeholder='Search in your asked Questions' />
                </View>
            </View>
            <View style={{ marginTop: 10, flex: 1 }}>
                < FlatList
                    data={userQuestions}
                    renderItem={({ item: question }) => <QuestionListTile question={question} navigation={navigation} key={question._id} />}
                    keyExtractor={(item) => item._id}
                />
            </View>
            <TouchableNativeFeedback activeOpacity={0.8}
                onPress={() => setModalVisible(true)}>
                <View style={styles.touchableOpacityStyle}>
                    <AntDesign name='plus' size={30} color={colors.light} />
                    <NewQuestion modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
        paddingHorizontal: 5,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
        borderRadius: 40,
        backgroundColor: colors.primary,
        elevation: 4
    },
    searchProduct: {
        flex: 2,
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

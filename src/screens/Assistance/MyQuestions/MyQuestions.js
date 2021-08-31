import React, { useLayoutEffect, useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../components/utilities/Colors'
import { useQuestions } from '../../../context/QuestionsContext'
import NewQuestion from './NewQuestion'
import QuestionListTile from './QuestionListTile'
import Empty from '../../../components/utilities/Empty'
import FeedbackHandler from '../../../components/utilities/FeedbackHandler'


export default function MyQuestions({ navigation }) {
    // const [questions, setQuestions] = useState({ loading: false, data: Array.from('daniel amani') })
    const { userQuestions, getUserQuestions, loading } = useQuestions()
    const [refreshing, setRefreshing] = React.useState(false);

    useLayoutEffect(() => {
        getUserQuestions()
    }, [])
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, marginBottom: 5 }}>
                <View style={{ flex: 1, alignSelf: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Questions Asked</Text>
                    <Text style={{ fontSize: 14, color: '#C0C0C0' }}>{userQuestions.data.length}</Text>
                </View>
                <View style={styles.searchProduct}>
                    <Ionicons name='search' style={styles.searchIcon} color='#C0C0C0' size={20} />
                    <TextInput returnKeyType='search' style={styles.subSectionInput} placeholderTextColor='#C0C0C0' placeholder='Search in your asked Questions' />
                </View>
            </View>
            <View style={{ marginTop: 10, flex: 1 }}>
                {loading ?
                    <View>
                        <ActivityIndicator color='#ccc' animating size={30} />
                        <Text style={{ textAlign: 'center' }}>Plese wait...</Text>
                    </View>
                    :
                    userQuestions.data.length === 0 ?
                        <View>
                            <Empty />
                            {
                                userQuestions.error ?
                                    <View>
                                        <FeedbackHandler message={{ status: 'error', data: userQuestions.error }} />
                                        <TouchableNativeFeedback onPress={getUserQuestions}>
                                            <View style={{ width: 50, alignSelf: 'center', padding: 10, borderRadius: 5 }}>
                                                <Ionicons name='refresh' size={30} style={{ alignSelf: 'center' }} />
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    :
                                    <View>
                                        <Text style={{ textAlign: 'center', fontSize: 16, width: '50%', alignSelf: 'center', marginTop: 30, textTransform: 'capitalize' }}>
                                            You dont have any questions. Added questions will be listed here
                                        </Text>
                                        <TouchableNativeFeedback onPress={getUserQuestions}>
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
                                    onRefresh={getUserQuestions}
                                />
                            }
                            contentContainerStyle={{
                                paddingBottom: 60
                            }}
                            data={userQuestions.data}
                            renderItem={({ item: question }) => <QuestionListTile question={question} navigation={navigation} key={question._id} />}
                            keyExtractor={(item) => item._id}
                        />
                }
            </View>
            <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
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

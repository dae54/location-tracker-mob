import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import moment from 'moment'
import colors from '../../../components/utilities/Colors'

export default function QuestionListTile({ question, navigation, showStudent }) {
    return (
        <TouchableOpacity style={styles.card}
            activeOpacity={0.9}
            onLongPress={() => {
                console.log('long press')
            }}
            onPress={() => {
                navigation.navigate('question_profile', { question })
            }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text numberOfLines={2} style={{ width: '90%', fontWeight: 'bold', fontSize: 16, textTransform: 'capitalize' }}>
                    {question.title}
                </Text>
                {question.status === 'pending' &&
                    <Text style={{ backgroundColor: colors.primary, width: 15, height: 15, borderRadius: 7.5 }} />
                }
                {question.status === 'active' &&
                    <Text style={{ backgroundColor: colors.info, width: 15, height: 15, borderRadius: 7.5 }} />
                }
                {question.status === 'solved' &&
                    <Text style={{ backgroundColor: colors.success, width: 15, height: 15, borderRadius: 7.5 }} />
                }
            </View>
            <View style={{ marginTop: 5 }}>
                <Text numberOfLines={1} style={{ color: '#C0C0C0' }}>
                    {question.body}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {showStudent ?
                    <Text>Student: {question.user.fullName}</Text>
                    :
                    <Text>Tutor: {question.assistedBy ? question.assistedBy.fullName : 'Not assigned'}</Text>
                }
                <Text style={{}}>{moment(question.createdAt).format('DD MMM YYYY, HH:mm ')}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        // height: 150,
        backgroundColor: 'white',
        // margin: '3%',
        marginVertical: 10,
        marginHorizontal: 1,
        elevation: 3,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
})

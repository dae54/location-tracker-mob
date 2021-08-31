import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAuth } from '../../../../../context/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../../../components/utilities/Colors'
export default function ChatTile({ chat }) {
    const { authData } = useAuth()
    const toAlignRight = chat.sender === authData._id ? true : false


    return (
        <View>
            <View style={[styles.card, toAlignRight ? styles.alignRight : styles.alignLeft]}>
                {/* <Text>lorem ipsum dolor meskques fedora lorem ipsum dolor lorem ipsum dolor meskques fedora meskques fedora</Text> */}
                <Text>{chat.body}</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 10, color: '#C0C0C0', }}>{moment(chat.createdAt).fromNow()}</Text>
                    <Text style={{ fontSize: 10, color: '#C0C0C0', }}>
                        {chat.pending ?
                            <Ionicons name='timer-outline' color='red' size={14} />
                            :
                            <Ionicons name='checkmark' color={colors.info} size={14} />
                        }
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginTop: 10,
        elevation: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    alignRight: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
    },
    alignLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#e0e0e0',
    }
})

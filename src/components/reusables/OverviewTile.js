import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

function OverviewTile({ title, icon, value, link, currency }) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('whitesmoke')} >
            <View style={styles.overviewTile}>
                <Ionicons
                    style={styles.overviewIcon}
                    name={icon}
                    size={20}
                    color='#C0C0C0'
                />
                <View>
                    <Text style={styles.overviewValue}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {currency && 'Tsh'}</Text>
                    <Text style={styles.overviewTitle}>{title}</Text>
                </View>
                <View>
                    <Text style={{ color: '#C0C0C0' }}>Tap to view</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default OverviewTile

const styles = StyleSheet.create({
    overviewTile: {
        backgroundColor: 'white',
        height: '25%',
        flexGrow: 1,
        margin: '3%',
        elevation: 2,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 15,
        // contents
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    overviewIcon: {
        borderWidth: 1,
        height: 40,
        width: 40,
        borderColor: '#C0C0C0',
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'white'
    },
    overviewValue: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    overviewTitle: {
        fontSize: 16,
    }
})

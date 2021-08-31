import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function OverviewTile({ title, value, link, currency }) {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.overviewTile}>
            <Text style={styles.overviewTitle}>{title}</Text>
            <Text style={styles.overviewValue}>{value} {currency && 'Tsh'}</Text>
            {/* <Text style={styles.overviewValue}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {currency && 'Tsh'}</Text> */}
        </TouchableOpacity>
    )
}

export default OverviewTile

const styles = StyleSheet.create({
    overviewTile: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        margin: 5,
        elevation: 1,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '50%'
    },
    overviewValue: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    overviewTitle: {
        fontSize: 16,
    }
})

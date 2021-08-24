import React, { useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, StyleSheet, Animated } from 'react-native'
import { useTabBarVisibility } from '../../../../context/NavigationContext'
import PagerView from 'react-native-pager-view';
import colors from '../../../../components/utilities/Colors'
import QuestionInfo from './QuestionInfo'
import QuestionChat from './QuestionChat'

export default function QuestionProfile({ navigation }) {
    const { setVisible, setHidden } = useTabBarVisibility()
    const [selectedPage, setSelectedPage] = useState(0)
    const pageViewRef = useRef()



    React.useLayoutEffect(() => {
        setHidden()
        return (() => {
            setVisible()
        })
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableNativeFeedback onPress={() => navigation.pop()}>
                    <AntDesign name='arrowleft' color='black' size={20} />
                </TouchableNativeFeedback>
                <View style={styles.headerBody}>
                    <View style={styles.headerBodyTitles}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>QN # 9987</Text>
                        <Text>Dr. Ellen Maziku</Text>
                    </View>
                    <Ionicons name='ellipsis-vertical-outline' color='black' size={20} style={{ marginRight: 15 }} />
                </View>
            </View>
            <View style={{ flexGrow: 1, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0, backgroundColor: 'white' }}>
                    <TouchableNativeFeedback onPress={() => {
                        setSelectedPage(0)
                        pageViewRef.current.setPage(0)
                    }}>
                        <View style={[styles.tabs, selectedPage === 0 ? styles.active : styles.inactive]}>
                            <Text>QUESTION INFO</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => {
                        setSelectedPage(1)
                        pageViewRef.current.setPage(1)
                    }}>
                        <View style={[styles.tabs, selectedPage === 1 ? styles.active : styles.inactive]}>
                            <Text>CHAT</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <PagerView
                    ref={pageViewRef}
                    style={styles.pagerView}
                    initialPage={0}
                    onPageSelected={(e) => {
                        setSelectedPage(e.nativeEvent.position)
                    }} >
                    <View key="1">
                        <QuestionInfo />
                    </View>
                    <View key="2">
                        <QuestionChat />
                    </View>
                </PagerView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation: 5
    },
    headerBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    headerBodyTitles: {
        flexGrow: 1
    },
    pagerView: {
        flexGrow: 1,
        // backgroundColor: 'red',
    },
    tabs: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    active: {
        backgroundColor: colors.info,
        borderBottomWidth: 1,
    }
})
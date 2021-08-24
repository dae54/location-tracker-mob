import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import { useTabBarVisibility } from '../../../../context/NavigationContext'

export default function QuestionProfile({ navigation }) {

    const { setVisible, setHidden } = useTabBarVisibility()
    React.useLayoutEffect(() => {
        setHidden()
        return (() => {
            setVisible()
        })
    }, [])

    return (
        <View>
            <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <TouchableNativeFeedback onPress={() => navigation.pop()}>
                    <AntDesign name='arrowleft' color='black' size={20} />
                </TouchableNativeFeedback>
            </View>
            <Text>QUestion Profile</Text>
        </View>
    )
}

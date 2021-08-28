import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../components/utilities/Colors';
import { useAuth } from '../../context/AuthContext';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Menu({ menuVisible, setMenuVisible }) {
    const auth = useAuth();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={menuVisible}
            onRequestClose={() => {
                setMenuVisible(false);
            }}>
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(100,100,100, 0.5)',
                    padding: 20,
                }}>
                <View style={{ backgroundColor: 'white', marginTop: 50, borderRadius: 20, elevation: 3, padding: 10 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        setMenuVisible(false)
                    }} style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', width: 30, height: 30, alignSelf: 'flex-end', elevation: 5, borderRadius: 15, marginTop: -20, marginRight: -20 }}>
                        <Text style={{ alignSelf: 'center', color: 'gray' }}>
                            <AntDesign name='close' size={20} style={{}} />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Menu</Text>
                    <ActionButton title='Change Password' />
                    <ActionButton title='Visit Profile' />
                    <ActionButton title="Read FAQ's" />
                    <ActionButton title='Sign Out' color='red' action={() => auth.signOut()} />
                </View>
            </View>
        </Modal>
    )
}

function ActionButton({ title, action, color }) {
    return (
        <TouchableOpacity onPress={action} style={{ backgroundColor: 'white', borderRadius: 10, elevation: 1, paddingHorizontal: 10, paddingVertical: 15, alignItems: 'center', marginVertical: 5 }} activeOpacity={0.9}>
            <Text style={{ color }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { useSettings } from '../../context/SettingsContext';

export default function Settings() {
    const { mapRadius, saveSettings } = useSettings()

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ width: '100%', marginBottom: 10, height: 50, backgroundColor: 'white', elevation: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18 }}>Settings</Text>
            </View>
            <View style={{ marginHorizontal: 5 }}>
                <View style={{ elevation: 2, backgroundColor: 'white', padding: 10, marginVertical: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ width: '65%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Assistance Covege</Text>
                        <Text style={{ color: '#c0c0c0', fontSize: 12 }}>Change the maximum radius on map from your location so as to give priority to nearby volunteers</Text>
                    </View>
                    <View style={{ width: '35%' }}>
                        <Picker
                            style={{ elevation: 1, backgroundColor: 'white', textAlign: 'center', }}
                            selectedValue={mapRadius}
                            onValueChange={(value) => saveSettings({ key: '@mapRadius', value: JSON.stringify(value) })}>
                            <Picker.Item label="10 km" value={10000} />
                            <Picker.Item label="50 km" value={50000} />
                            <Picker.Item label="100 km" value={100000} />
                            <Picker.Item label="500 km" value={500000} />
                            <Picker.Item label="1,000 km" value={1000000} />
                        </Picker>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

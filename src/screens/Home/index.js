import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import colors from '../../components/utilities/Colors';
import OverviewTile from '../../components/reusables/OverviewTile';
import Menu from './Menu'
import { useSettings } from '../../context/SettingsContext';

export default function HomeScreen() {
    const [menuVisible, setMenuVisible] = useState(false)
    const { mapRadius } = useSettings()
    console.log(mapRadius)
    console.log('**************')
    const [markers, setMarkers] = useState([{
        latitude: -6.7924,
        longitude: 39,
        title: 'marker',
        description: 'desc'
    },
    {
        latitude: -6.7888,
        longitude: 39.2083,
        title: 'marker',
        description: 'desc'
    }
    ])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: colors.light, elevation: 2, flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                <Text>Location Aware</Text>
                <TouchableNativeFeedback accessibilityHint='sign out'
                    onPress={() => {
                        setMenuVisible(true)
                    }}
                >
                    <View style={{ justifyContent: 'center', height: 50, width: 30, alignItems: 'flex-end' }}>
                        <Ionicons name='ellipsis-vertical-outline' color='black' size={20} style={{}} />
                        <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
                    </View>
                </TouchableNativeFeedback>
            </View>

            <ScrollView style={{ backgroundColor: colors.light }} >
                <View style={{ width: '50%' }}>
                    <OverviewTile title='Today Sales' icon='person-outline' value={120000} currency />
                    <OverviewTile title='Today Sales' icon='person-outline' value={120000} currency />
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        rotateEnabled={false}
                        initialRegion={{
                            latitude: -6.7924,
                            longitude: 39.2083,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        zoomTapEnabled={false}
                        loadingEnabled
                        showsUserLocation
                    // initialCamera={{ zoom: 5 }}
                    >
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                // coordinate={marker.latlng}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
                        <Circle center={{ latitude: -6.7924, longitude: 39.2083 }} radius={mapRadius} />
                    </MapView>
                </View>

            </ScrollView>
        </View>
        // <View style={styles.main}>
        //     <View style={{ height: 50, backgroundColor: colors.light, elevation: 2, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        //         <Text>Location Aware</Text>
        //         <Button title='sign out' onPress={() => auth.signOut()} />
        //     </View>

        //     <ScrollView>
        //         <View style={styles.scrollContainer}>

        //             <View style={styles.container}>
        //                 <MapView
        //                     style={styles.map}
        //                     provider={PROVIDER_GOOGLE}
        //                     rotateEnabled={false}
        //                     initialRegion={{
        //                         latitude: 37.78825,
        //                         longitude: -122.4324,
        //                         latitudeDelta: 0.0922,
        //                         longitudeDelta: 0.0421,
        //                     }}
        //                     region={{
        //                         latitude: 37.78825,
        //                         longitude: -122.4324,
        //                         latitudeDelta: 0.015,
        //                         longitudeDelta: 0.0121,
        //                     }}
        //                 />
        //             </View>
        //             <Text>Home</Text>

        //         </View>
        //     </ScrollView>
        // </View>

        // <View style={styles.containers}>
        //     <MapView style={styles.mapcontainer}
        //         showsUserLocation={true}
        //         showsMyLocationButton={true}
        //         showsCompass
        //         showsScale

        //         zoomEnabled={true}
        //         region={{
        //             latitude: 37.78825,
        //             longitude: -122.4324,
        //             latitudeDelta: 0.015,
        //             longitudeDelta: 0.0121,
        //         }}

        //     onRegionChange={region => {
        //         clearTimeout(this.timerForMap)
        //         this.timerForMap = setTimeout(() => {
        //             this.showMarkers(region)
        //         }, 100)
        //     }}
        //     >
        //     </MapView>
        // </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        height: '100%'
    },
    scrollContainer: {
        // flex: 1,
        height: '98%',
        backgroundColor: 'red'
    },
    mapContainer: {
        height: 500,
        width: '99%',
        marginVertical: 2,
        elevation: 3,
    },
    map: {
        width: '100%',
        height: '100%'
    },
});

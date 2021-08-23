import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { useAuth } from '../../context/AuthContext';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../../components/utilities/Colors';
import OverviewTile from '../../components/reusables/OverviewTile';

export default function HomeScreen() {
    // const auth = useAu
    const auth = useAuth();

    return (
        <View>
            <View style={{ height: 50, backgroundColor: colors.light, elevation: 2, flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <Text>Location Aware</Text>
                <TouchableNativeFeedback accessibilityHint='sign out' onPress={() => auth.signOut()} >
                    <View>
                        <AntDesign name='logout' size={20} style={{}} />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <ScrollView style={{ backgroundColor: colors.light, height: 1000, marginBottom: 100 }} >
                {/* <View> */}
                <View style={{ width: '50%' }}>
                    <OverviewTile title='Today Sales' icon='person-outline' value={120000} currency />
                    <OverviewTile title='Today Sales' icon='person-outline' value={120000} currency />
                </View>
                {/* </View> */}
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        rotateEnabled={false}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    />
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

// const styles = StyleSheet.create({})

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

// const styles = StyleSheet.create({
//     containers: { flex: 1, },
//     mapcontainer: {
//         flex: 1,
//         ...StyleSheet.absoluteFillObject
//     },
// });
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import colors from '../../components/utilities/Colors';
import OverviewTile from '../../components/reusables/OverviewTile';
import Menu from './Menu'
import { useSettings } from '../../context/SettingsContext';
import * as QuestionsAPI from '../../api/questionAPI'
import * as LocationAPI from '../../api/locationAPI'
import { useAuth } from '../../context/AuthContext';


export default function HomeScreen() {
    const [menuVisible, setMenuVisible] = useState(false)
    const { mapRadius } = useSettings()
    const { authData } = useAuth()
    const [questionCounts, setQuestionCounts] = useState({})

    useEffect(() => {
        getUserCounts()
        getTutorsLocation()
    }, [])



    async function getTutorsLocation() {
        await LocationAPI.getTutorsLocation()
            .then(response => {
                // console.log(response)
                const data = response.map(marker => {
                    return {
                        latitude: marker.lat,
                        longitude: marker.lng,
                        title: 'Tutor Position',
                        description: `Name: ${marker.user.fullName}`
                    }
                })
                setMarkers(data)
            })
    }

    async function getUserCounts() {
        await QuestionsAPI.getQuestionsCount(authData._id)
            .then(response => {
                console.log(response)
                setQuestionCounts(response)
            })
    }

    const [markers, setMarkers] = useState([
        {
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
                    background={TouchableNativeFeedback.Ripple('#c0c0c0', true)}
                    onPress={() => {
                        setMenuVisible(true)
                    }}
                >
                    <View style={{ justifyContent: 'center', height: 40, width: 40, borderRadius: 30, alignItems: 'center' }}>
                        <Ionicons name='ellipsis-vertical-outline' color='black' size={20} style={{}} />
                        <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
                    </View>
                </TouchableNativeFeedback>

            </View>

            <ScrollView style={{ backgroundColor: colors.light }} contentContainerStyle={{ flex: 1 }} >
                <View style={{ flexDirection: 'row', paddingLeft: 0, paddingRight: 20 }}>
                    {authData.role === 1 && <OverviewTile title='Your Questions' icon='person-outline' value={questionCounts.userQuestions} />}
                    {authData.role === 2 && <OverviewTile title='Assists' icon='person-outline' value={questionCounts.assistedBy} />}
                    <OverviewTile title='Total Questions' icon='person-outline' value={questionCounts.allQuestions} />
                </View>
                <View style={{ marginLeft: 5, padding: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tutors Map Location</Text>
                    <Text style={{ color: 'gray', fontSize: 12, }}>Go to settings to adjust the radius of coverage where you wish your questions to be broadcasted to</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        rotateEnabled={false}
                        // initialRegion={{
                        //     latitude: -6.7924,
                        //     longitude: 39.2083,
                        //     latitudeDelta: 0.0922,
                        //     longitudeDelta: 0.0421,
                        // }}
                        zoomTapEnabled={false}
                        loadingEnabled
                        showsUserLocation
                        onUserLocationChange={(e) => {
                            if (authData.role === 2)
                                LocationAPI.updateTutorsLocation(authData._id, { lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude })
                        }}
                        camera={{
                            zoom: 5,
                            center: {
                                latitude: -6.7924,
                                longitude: 39.2083,
                            },
                            pitch: 0,
                            altitude: 200,
                            heading: 0
                        }}
                    >
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
                        <Circle center={{ latitude: -6.7924, longitude: 39.2083 }} radius={mapRadius} />
                    </MapView>
                </View>
                {/* <View style={styles.full}>
                    <Text>asd</Text>
                    
                </View> */}

            </ScrollView>
            {/* <View style={{ flexDirection: 'row', paddingLeft: 0, paddingRight: 20 }}>
                {authData.role === 1 && <OverviewTile title='Your Questions' icon='person-outline' value={questionCounts.userQuestions} />}
                {authData.role === 2 && <OverviewTile title='Assists' icon='person-outline' value={questionCounts.assistedBy} />}
                <OverviewTile title='Total Questions' icon='person-outline' value={questionCounts.allQuestions} />
            </View>
            */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        // height: '100%'
    },
    scrollContainer: {
        // flex: 1,
        // height: '98%',
        // backgroundColor: 'red'
    },
    mapContainer: {
        // padding: 10,
        margin: 5,
        // height: 500,
        // flex: 1,
        // flexGrow: 1,
        // width: '99%',
        // margin/
        // marginVertical: 2,
        // marginBottom: 10,
        elevation: 3,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    full: {
        flexGrow: 1
    }
});

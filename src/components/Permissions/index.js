import { PermissionsAndroid, } from "react-native";

export const RequestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location aware App Location Permission",
                message:
                    "Location aware App needs access to your location " +
                    "so your questions can reach nearby tutors / helpers.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the Location");
            return true
        } else {
            console.log("Location permission denied");
            return false
        }
    } catch (err) {
        console.warn(err);
        throw err
    }
};

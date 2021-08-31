import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@AuthData')
        if (value !== null) {
            return JSON.parse(value).token
        }
    } catch (e) {
        // error reading value
    }
}

const instance = axios.create({
    timeout: 10000,
    timeoutErrorMessage: 'Request timeout. Try again',
    // baseURL: 'http://10.0.2.2:5400/api/v1'
    baseURL: 'https://location-aware-api.herokuapp.com/api/v1'
    // baseURL: 'http://192.168.172.69:5400/api/v1'
});

instance.interceptors.request.use(async config => {
    config.headers.Authorization = await getToken();
    return config;
})

export default instance;





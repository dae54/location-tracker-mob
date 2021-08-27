import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as AuthAPI from '../api/authAPI'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState();
    // const [shopData, setShopData] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorage function.
        loadStorageData();
    }, []);

    async function loadStorageData() {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            // const shopDataSerialized = await AsyncStorage.getItem('@ShopData');
            if (authDataSerialized) {
                const _authData = JSON.parse(authDataSerialized);
                // const _shopData = JSON.parse(shopDataSerialized);
                setAuthData(_authData);
                // setShopData(_shopData)
            }
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    const signIn = async (email, password) => {
        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        try {
            // const _authData = await AuthAPI.login(
            //     'root@admin.com',
            //     'toor',
            // );
            const _authData = await AuthAPI.login(email, password)
            // const _shopData = await AuthAPI.getUserShops(_authData._id)
            setAuthData(_authData);
            // setShopData(_shopData)
            AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
            // AsyncStorage.setItem('@ShopData', JSON.stringify(_shopData));
        } catch (error) {
            throw error
        }
    };

    const signUp = async (payload) => {
        try {
            const response = await AuthAPI.signUp(payload)
            return response
            // setAuthData(_authData);
            // AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
        } catch (error) {
            throw error
        }
    }

    const signOut = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        await AuthAPI.signOut()
        setAuthData(undefined);

        await AsyncStorage.removeItem('@AuthData');
        // await AsyncStorage.removeItem('@ShopData');
    };

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthContext, AuthProvider, useAuth };
















// import React from 'react';
// import SecureStore from 'secure-store';

// export default function App({ navigation }) {
//     const [state, dispatch] = React.useReducer(
//         (prevState, action) => {
//             switch (action.type) {
//                 case 'RESTORE_TOKEN':
//                     return {
//                         ...prevState,
//                         userToken: action.token,
//                         isLoading: false,
//                     };
//                 case 'SIGN_IN':
//                     return {
//                         ...prevState,
//                         isSignout: false,
//                         userToken: action.token,
//                     };
//                 case 'SIGN_OUT':
//                     return {
//                         ...prevState,
//                         isSignout: true,
//                         userToken: null,
//                     };
//             }
//         },
//         {
//             isLoading: true,
//             isSignout: false,
//             userToken: null,
//         }
//     );

//     React.useEffect(() => {
//         // Fetch the token from storage then navigate to our appropriate place
//         const bootstrapAsync = async () => {
//             let userToken;

//             try {
//                 userToken = await SecureStore.getItemAsync('userToken');
//             } catch (e) {
//                 // Restoring token failed
//             }

//             // After restoring token, we may need to validate it in production apps

//             // This will switch to the App screen or Auth screen and this loading
//             // screen will be unmounted and thrown away.
//             dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//         };

//         bootstrapAsync();
//     }, []);

//     const authContext = React.useMemo(
//         () => ({
//             signIn: async data => {
//                 // In a production app, we need to send some data (usually username, password) to server and get a token
//                 // We will also need to handle errors if sign in failed
//                 // After getting token, we need to persist the token using `SecureStore`
//                 // In the example, we'll use a dummy token

//                 dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//             },
//             signOut: () => dispatch({ type: 'SIGN_OUT' }),
//             signUp: async data => {
//                 // In a production app, we need to send user data to server and get a token
//                 // We will also need to handle errors if sign up failed
//                 // After getting token, we need to persist the token using `SecureStore`
//                 // In the example, we'll use a dummy token

//                 dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//             },
//         }),
//         []
//     );

//     return (
//         <AuthContext.Provider value={authContext}>
//             <Stack.Navigator>
//                 {state.userToken == null ? (
//                     <Stack.Screen name="SignIn" component={SignInScreen} />
//                 ) : (
//                     <Stack.Screen name="Home" component={HomeScreen} />
//                 )}
//             </Stack.Navigator>
//         </AuthContext.Provider>
//     );
// }

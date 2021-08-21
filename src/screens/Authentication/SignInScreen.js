import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';


export default function SignInScreen() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    const auth = useAuth();
    const signIn = async () => {
        setLoading(true);
        await auth.signIn().catch(error => {
            console.log(error)
            setLoading(false);
            setError(error)
        });
    };

    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            {loading ?
                <ActivityIndicator color='#000' animating={true} size="large" />
                :
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15 }} onPress={signIn} >
                    <Text>Sign In</Text>
                </TouchableOpacity>
            }
            {error &&
                <Text>{error.message}</Text>
            }
            {/* {loading ? (
                <ActivityIndicator color='#000' animating={true} size="large" />
            ) : (
                <Button title="Sign In" onPress={signIn} />
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
    },
});
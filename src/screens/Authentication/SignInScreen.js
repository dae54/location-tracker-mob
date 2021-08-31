import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, Keyboard, Dimensions, ScrollView, TouchableNativeFeedback } from 'react-native';
import colors from '../../components/utilities/Colors';
import FeedbackHandler from '../../components/utilities/FeedbackHandler';
// import colors from '../../components/utilities/Colors';
import { useAuth } from '../../context/AuthContext';


export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', data: '' })
    const auth = useAuth();
    async function signIn() {
        console.log('login')
        setLoading(true);
        setMessage({ status: '', data: '' })
        await auth.signIn(email, password)
            .catch(error => {
                console.log(error)
                setLoading(false);
                setMessage({ status: 'error', data: error.message })
            });
    };

    return (
        <ScrollView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <View style={{ width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').width * 0.4, borderWidth: 1, borderRadius: Dimensions.get('window').width * 0.2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 50, marginBottom: 20 }}>
                            <Text style={styles.logoText}>Location Aware</Text>
                        </View>
                        <KeyboardAvoidingView>
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} placeholderTextColor='#c0c0c0' onChangeText={(text) => setEmail(text)} />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView>
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} placeholderTextColor='#c0c0c0' secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                        </KeyboardAvoidingView>
                        <View style={{ width: '80%', alignSelf: 'center', marginTop: 20 }}>
                            <TouchableNativeFeedback
                                onPress={signIn}
                                disabled={loading}
                            >
                                <View style={styles.loginButton}>
                                    <Text style={{ color: 'white' }}>SIGN IN</Text>
                                    {loading && <ActivityIndicator animatings color='white' style={{ marginLeft: 10 }} />}
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        {message.status !== '' &&
                            <View style={{ width: '80%', alignSelf: 'center', marginTop: 5 }}>
                                <FeedbackHandler message={message} />
                            </View>
                        }
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignSelf: 'center', marginTop: 20 }}>
                            <TouchableWithoutFeedback>
                                <Text style={{ color: colors.primary }}>Reset password</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('create_account')}>
                                <Text style={{ color: colors.primary }}>Create Account</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerView: {
        flex: 1,
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoText: {
        fontSize: 30,
        fontWeight: "800",
        // color: 'white',
        // marginTop: 150,
        // marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        width: '80%',
        alignSelf: 'center',
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        color: 'black'

    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
});
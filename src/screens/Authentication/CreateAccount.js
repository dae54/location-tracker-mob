import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, Button, Keyboard, Dimensions, ScrollView, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import colors from '../../components/utilities/Colors';
import FeedbackHandler from '../../components/utilities/FeedbackHandler';
// import colors from '../../components/utilities/Colors';
import { useAuth } from '../../context/AuthContext';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';


export default function CreateAccountScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [selectedRole, setSelectedRole] = useState('')


    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ status: '', data: '' })
    const { signUp } = useAuth();
    // async function signIn() {
    //     setLoading(true);
    //     setMessage({ status: '', data: '' })
    //     await auth.signIn(email, password)
    //         .catch(error => {
    //             console.log(error)
    //             setLoading(false);
    //             setMessage({ status: 'error', data: error.message })
    //         });
    // };

    return (
        <ScrollView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={async values => {
                            console.log(values)
                            setMessage({ status: '', data: '' })

                            await signUp(values)
                                .then(response => {
                                    console.log(response)
                                    ToastAndroid.show(response.message, ToastAndroid.LONG)
                                    navigation.navigate('sign_in')
                                })
                                .catch(error => {
                                    console.log(error)
                                    setMessage({ status: 'error', data: error.message })
                                })
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={styles.loginFormView}>
                                <View style={{ width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').width * 0.4, borderWidth: 1, borderRadius: Dimensions.get('window').width * 0.2, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                                    <Text style={styles.logoText}>Location Aware</Text>
                                </View>
                                <KeyboardAvoidingView style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', justifyContent: 'space-between' }}>
                                    <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.smallTextInput} value={values.firstName} onChangeText={handleChange('firstName')} />
                                    <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.smallTextInput} value={values.lastName} onChangeText={handleChange('lastName')} />
                                </KeyboardAvoidingView>
                                <KeyboardAvoidingView>
                                    <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} value={values.email} onChangeText={handleChange('email')} />
                                </KeyboardAvoidingView>
                                <KeyboardAvoidingView>
                                    <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} value={values.password} onChangeText={handleChange('password')} />
                                </KeyboardAvoidingView>
                                <KeyboardAvoidingView>
                                    <TextInput placeholder="Repeat Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} value={values.rePassword} onChangeText={handleChange('rePassword')} />
                                </KeyboardAvoidingView>
                                <KeyboardAvoidingView style={styles.roleSelector}>
                                    {/* <Text style={{ paddingTop: 10, color: '#C0C0C0' }}>Select your role</Text> */}
                                    <Picker

                                        selectedValue={values.role}
                                        onValueChange={
                                            handleChange('role')
                                        }>
                                        <Picker.Item enabled={false} label="Select your role" value={0} />
                                        <Picker.Item label="Student" value='1' />
                                        <Picker.Item label="Tutor" value='2' />
                                    </Picker>
                                </KeyboardAvoidingView>
                                <KeyboardAvoidingView style={styles.roleSelector}>
                                    {/* <Text style={{ paddingTop: 10, color: '#C0C0C0' }}>Select your role</Text> */}
                                    <Picker
                                        selectedValue={values.gender}
                                        onValueChange={
                                            handleChange('gender')
                                        }>
                                        <Picker.Item enabled={false} label="Select your gender" value={0} />
                                        <Picker.Item label="Male" value="male" />
                                        <Picker.Item label="Female" value="female" />
                                    </Picker>
                                </KeyboardAvoidingView>
                                {message.status !== '' &&
                                    <View style={{ width: '80%', alignSelf: 'center', marginTop: 5 }}>
                                        <FeedbackHandler message={message} />
                                    </View>
                                }
                                <View style={{ width: '80%', alignSelf: 'center', marginTop: 20 }}>
                                    <TouchableNativeFeedback
                                        onPress={handleSubmit}
                                        disabled={loading}
                                    >
                                        <View style={styles.loginButton}>
                                            <Text style={{ color: 'white' }}>CREATE ACCOUNT</Text>
                                            {loading && <ActivityIndicator animatings color='white' style={{ marginLeft: 10 }} />}
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>

                                <View style={{ width: '80%', alignSelf: 'center', marginTop: 20 }}>
                                    {/* <TouchableWithoutFeedback>
                                <Text style={{ color: colors.primary }}>Reset password</Text>
                            </TouchableWithoutFeedback> */}
                                    <TouchableWithoutFeedback onPress={() => navigation.navigate('sign_in')}>
                                        <Text style={{ color: colors.primary }}>Sign In</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        )}
                    </Formik>
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
    smallTextInput: {
        height: 43,
        width: '49%',
        paddingLeft: 10,
        // marginLeft: 15,
        // marginRight: 15,
        marginVertical: 5,
        backgroundColor: '#fafafa',
        borderColor: '#eaeaea',
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
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
    },
    roleSelector: {
        // height: 43,
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
    tabs: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    active: {
        backgroundColor: colors.info,
        borderBottomWidth: 1,
    }
});
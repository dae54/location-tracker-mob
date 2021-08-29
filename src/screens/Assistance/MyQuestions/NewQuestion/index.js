import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../../../../components/utilities/Colors'
import FeedbackHandler from '../../../../components/utilities/FeedbackHandler'
import { useQuestions } from '../../../../context/QuestionsContext'
import EditPreview from './EditPreview'

export default function NewQuestion({ modalVisible, setModalVisible, navigation }) {
    const [title, setTitle] = useState('')
    const [tagString, setTagString] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { createQuestion } = useQuestions()
    // Effect to extract tags from tagstring
    useEffect(() => {
        // Extract tags from a comma separated text
        const dt = tagString.split(',')
        // Remove the last empty element
        setTags(dt.filter(x => x !== ''))
    }, [tagString])

    function postQuestion() {
        const data = {
            title, body, tags, attachments: []
        }
        setError('')
        setLoading(true)
        createQuestion(data)
            .then(() => {
                // CLEANUP INPUTS
                setBody('')
                setTagString('')
                setTags([])
                setTitle('')
                setModalVisible(false)
            }).catch(error => {
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
            <ScrollView
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(100,100,100, 0.5)',
                    padding: 20,
                }}>
                <View style={{ backgroundColor: 'white', borderRadius: 20, elevation: 3, padding: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, alignSelf: 'center', fontWeight: 'bold' }}>New Question</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(false)} style={{ justifyContent: 'center', backgroundColor: 'white', width: 30, height: 30, elevation: 5, borderRadius: 15, }}>
                            <Text style={{ alignSelf: 'center', color: 'gray' }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Title</Text>
                        <KeyboardAvoidingView>
                            <TextInput style={{ borderWidth: 1, borderColor: '#C0C0C0', color: 'black', paddingHorizontal: 4, paddingVertical: 0 }} multiline placeholderTextColor='gray' placeholder='Enter a short, yet descriptive question title' numberOfLines={3} maxLength={150} value={title} onChangeText={(text) => setTitle(text)} />
                        </KeyboardAvoidingView>
                        <Text style={{ color: '#C0C0C0', fontSize: 12, alignSelf: 'flex-end' }}>{title.length}/150</Text>

                        <Text style={{ fontWeight: 'bold' }}>Body</Text>
                        <KeyboardAvoidingView>
                            <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Describe your question fully here. Markdown tags are allowed</Text>
                            <EditPreview value={body} setValue={setBody} />
                        </KeyboardAvoidingView>

                        <Text>Tags</Text>
                        <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Tags helps to categorize your question for easy assistance. Provide up to 10 comma separated tags describing your question</Text>
                        <KeyboardAvoidingView>
                            <TextInput style={{ borderWidth: 1, borderColor: '#C0C0C0', color: 'black', paddingHorizontal: 4, paddingVertical: 0 }} multiline placeholderTextColor='gray' placeholder='e.g. Javascript, MongoDB, mysql, database' numberOfLines={3} maxLength={150} value={tagString} onChangeText={(text) => setTagString(text.replace(/ +(?= )/g, ''))} />
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                                {tags.map(tag => {
                                    return (
                                        <Text style={{ backgroundColor: '#e1ecf4', color: '#6389c5', marginHorizontal: 5, padding: 5, borderRadius: 7 }}>{tag}</Text>
                                    )
                                })}
                            </View>
                        </KeyboardAvoidingView>
                        <Text>Attachments</Text>
                        <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Attach images, screenshots or links describing your problem</Text>
                        <Text style={{ color: '#ccc' }}>(coming soon)</Text>
                        {error.length > 0 &&
                            <FeedbackHandler message={{ status: 'error', data: error }} />
                        }
                        <TouchableNativeFeedback disabled={loading || title.length === 0} onPress={postQuestion}>
                            <View style={{ backgroundColor: colors.primary, paddingVertical: 8, elevation: 2, paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>POST</Text>
                                {loading &&
                                    <ActivityIndicator animating color='white' size={20} style={{ marginLeft: 5 }} />
                                }
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>

            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({})

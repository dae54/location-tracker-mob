import React, { useEffect, useState } from 'react'
import { Button, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import EditPreview from './EditPreview'

export default function NewQuestion({ modalVisible, setModalVisible, navigation }) {
    const [title, setTitle] = useState('')
    const [tagString, setTagString] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])

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
        console.log(data)
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
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                        setModalVisible(false)
                    }} style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', width: 30, height: 30, alignSelf: 'flex-end', elevation: 5, borderRadius: 15, marginTop: -20, marginRight: -20 }}>
                        <Text style={{ alignSelf: 'center', color: 'gray' }}>X</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>New Question</Text>
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

                        <Button title='post' onPress={postQuestion} />
                    </View>

                </View>

            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({})

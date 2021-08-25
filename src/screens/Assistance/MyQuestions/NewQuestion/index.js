import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

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
            <View
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
                        <TextInput style={{ borderWidth: 1, borderColor: '#C0C0C0', color: 'black', paddingHorizontal: 4, paddingVertical: 0 }} multiline placeholderTextColor='gray' placeholder='Enter a short, yet descriptive question title' numberOfLines={3} maxLength={150} value={title} onChangeText={(text) => setTitle(text)} />
                        <Text style={{ color: '#C0C0C0', fontSize: 12, alignSelf: 'flex-end' }}>{title.length}/150</Text>

                        <Text style={{ fontWeight: 'bold' }}>Body</Text>
                        <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Describe your question fully here</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: '#C0C0C0', color: 'black', minHeight: 100, maxHeight: 150, textAlign: 'justify', textAlignVertical: 'top' }} placeholderTextColor='gray' placeholder='' multiline value={body} onChangeText={(text) => setBody(text)} />

                        <Text>Tags</Text>
                        <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Tags helps to categorize your question for easy assistance. Provide up to 10 comma separated tags describing your question</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: '#C0C0C0', color: 'black', paddingHorizontal: 4, paddingVertical: 0 }} multiline placeholderTextColor='gray' placeholder='e.g. Javascript, MongoDB, mysql, database' numberOfLines={3} maxLength={150} value={tagString} onChangeText={(text) => setTagString(text.trimEnd())} />
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                            {tags.map(tag => {
                                return (
                                    <Text style={{ backgroundColor: '#e1ecf4', color: '#6389c5', marginHorizontal: 5, padding: 5, borderRadius: 7 }}>{tag}</Text>
                                )
                            })}
                        </View>

                        <Text>Attachments</Text>
                        <Text style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Attach images, screenshots or links describing your problem</Text>

                        <Button title='post' onPress={postQuestion} />
                    </View>

                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({})

import AsyncStorage from "@react-native-community/async-storage";
// import { useChat } from "../context/ChatContext";
import * as ChatAPI from './chatAPI'

export default async function SyncData() {
    // const { getQuestionsThread } = useChat()
    console.log('syncing')
    const pendingMessages = JSON.parse(await AsyncStorage.getItem('@pendingMessages'))
    console.log(pendingMessages)
    if (pendingMessages && pendingMessages.length > 0) {
        // pendingMessages.forEach(async message => {
        await ChatAPI.syncOfflineMessages(pendingMessages)
            .then(async response => {
                console.log('**********************************')
                console.log(response)
                console.log('*******************************')
                await AsyncStorage.removeItem('@pendingMessages')
                response.forEach(async question => {
                    const items = JSON.parse(await AsyncStorage.getItem(`@${question.questionId}`))
                    await AsyncStorage.setItem(`@${question.questionId}`, JSON.stringify(items.concat(question)))
                })
                // getQuestionsThread()
            })
        // .then(response => {
        //     console.log(response)
        //     pendingMessages.
        //         })
        // }
        // })
    }
    // AsyncStorage.setItem('@pendingMessages', JSON.stringify([payload].concat({ ...pendingMessages, pending: true })));

}
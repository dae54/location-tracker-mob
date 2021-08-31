import axios from './axiosConfig';

import { parseError, parseResponse } from './resolve.js';

export async function sendMessage(payload) {
    return await axios.post('/chat', payload)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}
export async function getQuestionsThread(questionId) {
    return await axios.get(`/chat/question/${questionId}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function getQuestionsLatestMessage(questionId, lastMessageSentAt, currentUser) {
    return await axios.get(`/chat/question/latest/${questionId}`, { params: { ...lastMessageSentAt, currentUser } })
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}



// export async function createQuestion(payload) {
//     return await axios.post('/questions/', payload)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }

// export async function getUserShops(userId) {
//     return await axios.get(`/shop/user/${userId}`)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }

// export async function getUser(id) {
//     return await resolve(axios.get(`http://some-api.com/users/${id}`).then(res => res.data));
// }
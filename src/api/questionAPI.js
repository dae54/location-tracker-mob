import axios from './axiosConfig';

import { parseError, parseResponse } from './resolve.js';

export async function getUserQuestions(userID) {
    return await axios.get(`/questions/user/${userID}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}
export async function getAllQuestions() {
    return await axios.get('/questions/')
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function getQuestionsAnsweredByMe(userID) {
    return await axios.get(`/questions/tutor/${userID}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function getQuestionsCount(userID) {
    return await axios.get(`/questions/count/${userID}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function createQuestion(payload) {
    return await axios.post('/questions/', payload)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function assignTutor(tutorID, questionID) {
    return await axios.patch(`/questions/tutor/${questionID}`, { tutorID })
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

// export async function getUserShops(userId) {
//     return await axios.get(`/shop/user/${userId}`)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }


// export async function getUser(id) {
//     return await resolve(axios.get(`http://some-api.com/users/${id}`).then(res => res.data));
// }
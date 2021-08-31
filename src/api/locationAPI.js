import axios from './axiosConfig';

import { parseError, parseResponse } from './resolve.js';

// export async function getUserQuestions(userID) {
//     return await axios.get(`/questions/user/${userID}`)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }
export async function getTutorsLocation() {
    return await axios.get('/location/')
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

// export async function getQuestionsAnsweredByMe(userID) {
//     return await axios.get(`/questions/tutor/${userID}`)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }

// export async function getQuestionsCount(userID) {
//     return await axios.get(`/questions/count/${userID}`)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }

// export async function createQuestion(payload) {
//     return await axios.post('/questions/', payload)
//         .then(response => parseResponse(response))
//         .catch(error => { throw parseError(error) })
// }

export async function updateTutorsLocation(tutorID, { lat, lng }) {
    return await axios.patch(`/location/${tutorID}`, { lat, lng })
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}
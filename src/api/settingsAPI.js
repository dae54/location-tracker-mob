import axios from './axiosConfig';

import { parseError, parseResponse } from './resolve.js';

export async function saveSettings(payload) {
    return await axios.post('/settings', payload)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}
export async function getSettings(key) {
    return await axios.get(`/settings/${key}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}
export async function getAllSettings() {
    return await axios.get('/settings')
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
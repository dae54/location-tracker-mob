import axios from './axiosConfig';

import { parseError, parseResponse, resolve } from './resolve.js';

export async function login(email, password) {
    return await axios.post('/users/login', { email, password })
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function signUp(payload) {
    return await axios.post('/users/register', payload)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function signOut() {
    return await axios.post('/users/signOut')
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

export async function getUserShops(userId) {
    return await axios.get(`/shop/user/${userId}`)
        .then(response => parseResponse(response))
        .catch(error => { throw parseError(error) })
}

// export async function getUser(id) {
//     return await resolve(axios.get(`http://some-api.com/users/${id}`).then(res => res.data));
// }
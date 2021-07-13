import logindata from '../data/login.json';

export const userAction = (user) => {
    if (user.email === logindata.username && user.password === logindata.password) {
        return { type: 'LOGIN_SUCCESS' }
    } else {
        alert('Invalid Username/Password')
        return {
            type: 'LOGIN_FAIL'
        }
    }
}

export const logout = () => {
    return {
        type: 'LOGIN_FAIL'
    }
}
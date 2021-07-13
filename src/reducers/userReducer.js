export const userReducer = (state = { isUserLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isUserLoggedIn: true
            }
        case 'LOGIN_FAIL':
            return {
                isUserLoggedIn: false
            }
        default:
            return state;
    }
}
const initialState = {
    inputLogin: '',
    inputPassword: '',
    Users: [{
        login: 'developer21',
        password: '123456',
        id: 0
    }],
    checkUser: true 
}

const INPUT_LOGIN_CHANGE = 'INPUT_LOGIN_CHANGE';
const INPUT_PASSWORD_CHANGE = 'INPUT_PASSWORD_CHANGE';

const CHECK_VALUE = 'CHECK_VALUE';

export const infoReducer = (state = initialState, action) => {
    switch(action.type) {

        case INPUT_LOGIN_CHANGE:
            return {
                ...state,
                inputLogin: action.payload
            }
        
        case INPUT_PASSWORD_CHANGE:
            return {
                ...state,
                inputPassword: action.payload
            }

        case CHECK_VALUE:
            for(let i = 0; i < state.Users.length; i++) {
                if(state.inputLogin === state.Users[i].login) {
                    if(state.inputPassword === state.Users[i].password) {
                        return {
                            ...state,
                            checkUser: false
                        }
                    }
                }
            }
            return {
                ...state,
                checkUser: true
            }

        default:
            return state;
    }
}

export const inputChangeLogin = (payload) => ({ type: INPUT_LOGIN_CHANGE, payload });
export const inputChangePassword = (payload) => ({ type: INPUT_PASSWORD_CHANGE, payload });
export const checkUser = () => ({ type: CHECK_VALUE });
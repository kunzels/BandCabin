import * as APIUtil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})


export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id)
        .then(user => (dispatch(receiveUser(user))))
)

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers()
        .then(users => (dispatch(receiveUsers(users))))
)

export const updateUser = user => dispatch => {
    return (
        APIUtil.updateUser(user).then(user => dispatch(receiveUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
    )
};
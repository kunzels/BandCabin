export const signup = (data) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data,
        processData: false,
        contentType: false
    })
};

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);


export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const fetchUser = (id) => (
    $.ajax({
        url: `/api/users/${id}`
    })
);

export const fetchUsers = () => (
    $.ajax({
        url:`/api/users`
    })
)

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user }
    })
)
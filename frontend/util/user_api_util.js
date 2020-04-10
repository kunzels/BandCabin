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
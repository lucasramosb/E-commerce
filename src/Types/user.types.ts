interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    provider: 'firebase' | 'google',
    photoUrl: string
}

export default User;
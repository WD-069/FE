export default function UserContainer() {
    const users = [
        { id: 1, name: 'karl' },
        { id: 2, name: 'hannah' },
        { id: 3, name: 'john' },
    ];

    return (
        <>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </>
    );
}

function UserCard({ user }) {
    return (
        <>
            <p>User:</p>
            <p>{user.name}</p>
        </>
    );
}

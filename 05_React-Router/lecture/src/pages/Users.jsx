import { Link } from "react-router-dom"

function Users() {
    const users = [
        {
            id: 1,
            name: 'Sara',
            age: 36
        },
        {
            id: 2,
            name: 'Paul',
            age: 44
        },
        {
            id: 3,
            name: 'John',
            age: 23
        },
    ]
  return (
    <div>
        {users.map((user) => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
    </div>
  )
}

export default Users
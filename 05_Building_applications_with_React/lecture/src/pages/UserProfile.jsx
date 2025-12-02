import { useParams } from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    console.log(id)

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
    const user = users.find((user) => user.id == id)
    console.log(user);
  return (
    <div>
        {user ? (
            <div>
                <h2>{user.name}</h2>
                <p><strong>Age: </strong> {user.age}</p>
            </div>) :
            (
                <div>
                    Not Found
                </div>
            )
        }
    </div>
  )
}

export default UserProfile
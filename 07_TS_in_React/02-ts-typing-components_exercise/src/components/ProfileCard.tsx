// components/ProfileCard.tsx
// This component should receive a `user` object with `name` (string) and `age` (number)

// # Type Definitions
// * Defining a complex object type
type User = {
  name: string;
  age: number;
  // * Optional property
  email?: string;
};

// * The prop itself is an object containing the 'user' object
type ProfileCardProps = { user: User };

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <p>
      {/* # Accessing Nested Data */}
      {/* * Accessing properties of the passed object */}
      {user.name} is {user.age} years old
    </p>
  );
};

export default ProfileCard;

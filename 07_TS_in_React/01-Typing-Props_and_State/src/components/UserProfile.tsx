// # TypeScript: Custom Prop Types with Union Types
// * Defining a type for component props ensures type safety when using this component
// * The ? after info makes it optional (info?: string)
export type UserProfileProps = {
  username: string;
  image: string;
  info?: string;
  // * Union type literal: status can ONLY be one of these three exact string values
  // * TypeScript will error if you pass any other string (e.g., status="invalid")
  status: "active" | "paused" | "inactive";
};

// * Destructuring props with explicit type annotation ensures all required props are provided
// ! If you forget a required prop (like status), TypeScript will show an error at compile time
const UserProfile = ({ username, image, info, status }: UserProfileProps) => {
  return (
    <article>
      <h2>{username}</h2>
      <img src={image} alt="User Image" />
      <p>{info}</p>
      <p>Status: {status}</p>
    </article>
  );
};
export default UserProfile;

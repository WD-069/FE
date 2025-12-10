// components/Avatar.tsx
// This component should receive `url` (string) and `altText` (string)

// # Prop Definitions
// * Simple typed props for an image component
type AvatarProps = {
  url: string;
  altText: string;
};

// # Functional Component
const Avatar = ({ url, altText }: AvatarProps) => {
  // * Standard img tag usage with passed props
  return <img src={url} alt={altText} />;
};

export default Avatar;

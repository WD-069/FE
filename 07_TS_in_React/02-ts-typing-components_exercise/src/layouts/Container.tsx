// # Type Definitions
type ContainerProps = {
  // * React.ReactNode allows any valid JSX content (elements, strings, numbers, null, etc.)
  children: React.ReactNode;
  // * Type for inline style objects
  style?: React.CSSProperties;
};

// # Layout Component
// * A wrapper component that provides consistent styling
const Container = ({ children, style }: ContainerProps) => (
  <div
    style={{
      // * Default styles
      border: '2px dashed #888',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: '#f9f9f9',
      fontFamily: 'sans-serif',
      // * Spreading the passed 'style' prop allows overriding defaults
      ...style
    }}
  >
    {/* * Rendering nested content passed between opening/closing tags */}
    {children}
  </div>
);

export default Container;

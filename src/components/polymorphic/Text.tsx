type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  as?: E;
  children: React.ReactNode;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({
  size,
  color,
  as,
  children,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export default Text;

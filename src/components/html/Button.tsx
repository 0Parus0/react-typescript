type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
  // restricted children to be a string only not a node or string
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      <div>{children}</div>
    </button>
  );
};

export default Button;

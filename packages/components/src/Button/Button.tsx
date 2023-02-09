import React from "react";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";

export interface ButtonProps extends MantineButtonProps {
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <MantineButton ref={ref} {...props}>
      {children}
    </MantineButton>
  );
});

Button.displayName = "Button";

export { Button };

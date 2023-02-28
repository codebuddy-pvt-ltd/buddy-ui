import React from "react";
import { Button as MantineButton } from "@mantine/core";
import { ButtonProps as Props } from "./Button.types";

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <MantineButton ref={ref} {...props}>
      {children}
    </MantineButton>
  );
});

Button.displayName = "Button";

export default Button;

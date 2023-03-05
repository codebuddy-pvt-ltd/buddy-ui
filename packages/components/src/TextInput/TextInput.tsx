import React from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import type { TextInputProps } from "./TextInput.types";

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ ...props }, ref) => {
  return <MantineTextInput ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";

export default TextInput;

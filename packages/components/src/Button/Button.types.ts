import { ButtonProps as MantineButtonProps } from "@mantine/core";

export interface ButtonProps extends MantineButtonProps {
  onClick?: () => void;
}

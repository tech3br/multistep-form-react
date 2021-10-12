import { ReactNode } from "react";

import * as C from "./styles";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  outline?: boolean;
  rest?: any;
}

export const Button = ({
  children,
  onClick,
  outline,
  ...rest
}: ButtonProps) => {
  return (
    <C.Container onClick={onClick} outline={outline} {...rest}>
      {children}
    </C.Container>
  );
};

export default Button;

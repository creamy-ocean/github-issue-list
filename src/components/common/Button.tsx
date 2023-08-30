import { ComponentPropsWithRef, ReactNode, Ref, forwardRef } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
}

const Button = ({ children }: Props, ref: Ref<HTMLButtonElement>) => {
  return <StyledButton ref={ref}>{children}</StyledButton>;
};

export default forwardRef(Button);

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
`;

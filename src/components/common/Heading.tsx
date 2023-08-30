import { ComponentPropsWithRef, ReactNode, Ref, forwardRef } from "react";
import styled from "styled-components";

interface Props extends ComponentPropsWithRef<"h1"> {
  children: ReactNode;
}

const Heading = ({ children }: Props, ref: Ref<HTMLHeadingElement>) => {
  return <StyledHeading ref={ref}>{children}</StyledHeading>;
};

export default forwardRef(Heading);

const StyledHeading = styled.h1`
  font-size: 2rem;
  padding: 2rem 0;
`;

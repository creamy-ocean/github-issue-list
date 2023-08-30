import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../../info";
import { styled } from "styled-components";

const Root = () => {
  return (
    <>
      <Heading>
        {ORGANIZATION_NAME} / {REPOSITORY_NAME}
      </Heading>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};

export default Root;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

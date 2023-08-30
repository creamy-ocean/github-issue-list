import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../../info";

const Root = () => {
  return (
    <>
      <Heading>
        {ORGANIZATION_NAME} / {REPOSITORY_NAME}
      </Heading>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;

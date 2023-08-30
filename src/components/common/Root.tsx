import { Outlet } from "react-router-dom";
import Heading from "./Heading";

const Root = () => {
  return (
    <>
      <Heading>Github Issue List</Heading>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;

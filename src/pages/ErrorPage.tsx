import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";

const ErrorPage = () => {
  return (
    <>
      <Heading>페이지를 찾을 수 없습니다</Heading>
      <Link to="/">
        <Button>목록으로</Button>
      </Link>
    </>
  );
};

export default ErrorPage;

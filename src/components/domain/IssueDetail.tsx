import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import IssueItem from "./IssueItem";
import { styled } from "styled-components";

const IssueDetail = () => {
  const location = useLocation();
  const { issue } = location.state;

  return (
    <>
      <IssueItem issue={issue} isDetail={true} />
      <StyledMarkDown children={issue.body} />
    </>
  );
};

export default IssueDetail;

const StyledMarkDown = styled(ReactMarkdown)`
  width: 50rem;
`;

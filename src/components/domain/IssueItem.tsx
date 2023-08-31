import styled from "styled-components";
import { Issue } from "../../apis/types";
import { Link } from "react-router-dom";

interface Props {
  issue: Omit<Issue, "profile_img" | "body">;
}

const IssueItem = ({ issue }: Props) => {
  return (
    <StyledLi>
      <FlexBox>
        <div>
          <div>
            #{issue.number}
            <StyledLink to={`/${issue.number}`}>
              <StyledSpan style={{ cursor: "pointer" }}>
                {issue.title}
              </StyledSpan>
            </StyledLink>
          </div>
          <div>
            작성자: {issue.username},{"  "}
            작성일:{" "}
            {`${issue.created_at.substring(
              0,
              4
            )}년 ${issue.created_at.substring(
              5,
              7
            )}월 ${issue.created_at.substring(8, 10)}일`}
          </div>
        </div>
      </FlexBox>
      <Comments>코멘트: {issue.comments}</Comments>
    </StyledLi>
  );
};

export default IssueItem;

const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  padding: 1rem 0;
  width: 45rem;
  color: #666;
`;

const FlexBox = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSpan = styled.span`
  color: #111;
  margin-left: 0.5rem;
`;

const Comments = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

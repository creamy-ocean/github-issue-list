import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Issue } from "../../apis/types";

interface Props {
  issue: Issue;
  isDetail: Boolean;
}

const IssueItem = ({ issue, isDetail }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledLi>
      <FlexBox>
        {isDetail && <StyledImg src={`${issue.profile_img}`} />}
        <div>
          <div>
            #{issue.number}
            {isDetail ? (
              <StyledSpan>{issue.title}</StyledSpan>
            ) : (
              <StyledSpan
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/${issue.number}`, {
                    state: { issue },
                  });
                }}
              >
                {issue.title}
              </StyledSpan>
            )}
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
      <div>코멘트: {issue.comments}</div>
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

const StyledImg = styled.img`
  width: 3rem;
`;

const StyledSpan = styled.span`
  color: #111;
  margin-left: 0.5rem;
`;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { styled } from "styled-components";
import issueApi from "../../apis/issue";
import { Issue } from "../../apis/types";

const IssueDetail = () => {
  const { issueNumber } = useParams();

  const [issue, setIssue] = useState<Issue>();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!issueNumber) {
      return;
    }
    const fetchIssue = async () => {
      try {
        const res = await issueApi.getDetail(Number(issueNumber));
        res && setIssue(res);
      } catch (err: any) {
        setError(err);
      }
    };
    fetchIssue();
  }, []);

  return (
    <>
      {error && <div>이슈를 불러오는 중 오류가 발생했습니다</div>}
      {issue && (
        <>
          <StyledLi>
            <FlexBox>
              <ImgBox>
                <StyledImg src={`${issue.profile_img}`} />
              </ImgBox>
              <div>
                <div>
                  #{issue.number}
                  <StyledSpan>{issue.title}</StyledSpan>
                  <StyledSpan>{issue.title}</StyledSpan>
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
          {typeof issue.body === "string" && (
            <StyledMarkDown children={issue.body} />
          )}
        </>
      )}
    </>
  );
};

export default IssueDetail;

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

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const StyledImg = styled.img`
  height: 4rem;
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

const StyledMarkDown = styled(ReactMarkdown)`
  width: 45rem;
`;

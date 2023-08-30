import { useEffect, useState, useRef } from "react";
import issueApi from "../../apis/issue";
import { Issue } from "../../apis/types";
import IssueItem from "./IssueItem";
import AdItem from "./AdItem";
import { styled } from "styled-components";

const IssueList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [issues, setIssues] = useState<Issue[]>([]);
  const bottom = useRef<any>(null);

  const fetchIssues = async () => {
    setIsLoading(true);
    const currIssues = await issueApi.get(pageNumber);
    currIssues && setIssues((prevIssues) => [...prevIssues, ...currIssues]);
    setIsLoading(false);
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    fetchIssues();
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchIssues();
      }
    });
    observer.observe(bottom.current);
  }, []);

  return (
    <>
      <StyledUl>
        {issues &&
          issues.map((issue, idx) => {
            return (
              <>
                <IssueItem key={issue.number} issue={issue} isDetail={false} />
                {(idx + 1) % 4 === 0 && <AdItem key={idx} />}
              </>
            );
          })}
      </StyledUl>
      {isLoading && <div>이슈 목록을 불러오는 중입니다</div>}
      <div ref={bottom}></div>
    </>
  );
};

export default IssueList;

const StyledUl = styled.ul`
  list-style: none;
`;

import { Fragment, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import issueApi from "../../apis/issue";
import { Issue } from "../../apis/types";
import AdItem from "./AdItem";
import IssueItem from "./IssueItem";

const IssueList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [issues, setIssues] = useState<Omit<Issue, "profile_img" | "body">[]>(
    []
  );
  const [hasMore, setHasMore] = useState(true);

  const PER_PAGE = 30;
  const bottom = useRef<any>(null);

  const fetchIssues = async () => {
    setIsLoading(true);
    try {
      const currIssues = await issueApi.get(pageNumber);
      currIssues.length < PER_PAGE && setHasMore(false);
      currIssues && setIssues((prevIssues) => [...prevIssues, ...currIssues]);
    } catch (err: any) {
      setError(err);
    }
    setIsLoading(false);
    setPageNumber((prev) => prev + 1);
  };

  const onIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      fetchIssues();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && bottom.current) observer.observe(bottom.current);

    return () => {
      observer && observer.disconnect();
    };
  }, [issues]);

  return (
    <>
      {error && <div>이슈 목록을 불러오는 중 오류가 발생했습니다</div>}
      <StyledUl>
        {issues &&
          issues.map((issue, idx) => {
            return (
              <Fragment key={issue.number}>
                <IssueItem issue={issue} />
                {(idx + 1) % 4 === 0 && <AdItem />}
              </Fragment>
            );
          })}
      </StyledUl>
      {isLoading && <div>이슈 목록을 불러오는 중입니다</div>}
      {hasMore && <div ref={bottom}></div>}
    </>
  );
};

export default IssueList;

const StyledUl = styled.ul`
  list-style: none;
`;

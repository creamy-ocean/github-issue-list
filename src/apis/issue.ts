import octokitInstance from "./octokitInstance";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../info";
import { Issue } from "./types";

const issueApi = {
  get: async (pageNumber: number) => {
    try {
      const res = await octokitInstance.request(
        "GET /repos/{owner}/{repo}/issues",
        {
          owner: ORGANIZATION_NAME,
          repo: REPOSITORY_NAME,
          sort: "comments",
          page: pageNumber,
        }
      );
      const issues: Issue[] = res.data.map((issue) => ({
        number: issue.number,
        title: issue.title,
        username: issue.user?.login,
        profile_img: issue.user?.avatar_url,
        created_at: issue.created_at,
        comments: issue.comments,
        body: issue.body,
      }));
      return issues;
    } catch (err) {
      console.error(err, "이슈 목록을 불러오는 중 오류가 발생했습니다");
    }
  },
};

export default issueApi;

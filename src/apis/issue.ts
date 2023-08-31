import octokitInstance from "./octokitInstance";
import { ORGANIZATION_NAME, REPOSITORY_NAME } from "../info";
import { Issue } from "./types";

const issueApi = {
  get: async (pageNumber: number) => {
    const res = await octokitInstance.request(
      "GET /repos/{owner}/{repo}/issues",
      {
        owner: ORGANIZATION_NAME,
        repo: REPOSITORY_NAME,
        page: pageNumber,
        state: "open",
        sort: "comments",
      }
    );
    const issues: Omit<Issue, "profile_img" | "body">[] = res.data.map(
      (issue) => ({
        number: issue.number,
        title: issue.title,
        username: issue.user?.login,
        created_at: issue.created_at,
        comments: issue.comments,
      })
    );
    return issues;
  },
  getDetail: async (issueNumber: number) => {
    const res = await octokitInstance.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: ORGANIZATION_NAME,
        repo: REPOSITORY_NAME,
        issue_number: issueNumber,
      }
    );
    const issue = {
      number: res.data.number,
      title: res.data.title,
      username: res.data.user?.login,
      profile_img: res.data.user?.avatar_url,
      comments: res.data.comments,
      created_at: res.data.created_at,
      body: res.data.body,
    };
    return issue;
  },
};

export default issueApi;

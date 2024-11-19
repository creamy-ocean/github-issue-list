# Github Issue List
> 원티드 프리온보딩 2주차 과제
>
> Wanted Pre-Onboarding Week 2 Assignment
<br/>

## 프로젝트 소개 (Project Overview)
- facebook react repository의 이슈 목록과 이슈 상세 내용을 확인할 수 있는 사이트
- A website that allows users to view the issue list and detailed issue information from the Facebook React repository.
<br/>
![image](https://github.com/creamy-ocean/github-issue-list/assets/93719660/013a19d9-12d0-4649-b91b-8e1cc870dd8f)

<br/>

## 배포 링크 (Deployment Link)
> https://co-github-issue-list.netlify.app
<br/>

## 구현 기능 (Features)
- octokit을 이용해 Github API로부터 이슈 목록과 이슈 상세 내용 가져오기
- 스크롤 할 때마다 이슈 목록 추가 로딩(무한 스크롤)
  - Intersection Observer를 이용해 구현
- 특정 순서마다 광고 이미지 출력하기
- Fetch issue lists and details using the Github API via Octokit.
- Load additional issue data on scroll (infinite scrolling).
  - Implemented using Intersection Observer.
- Display an advertisement image at specific intervals.
<br/>

## 기술 스택
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/octokit-343539?style=flat&logo=octokit&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
</div>

import { styled } from "styled-components";

const AdItem = () => {
  return (
    <StyledLi>
      <a href="https://www.wanted.co.kr/">
        <img
          alt="원티드 광고"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        />
      </a>
    </StyledLi>
  );
};

export default AdItem;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 1px solid #999;
`;

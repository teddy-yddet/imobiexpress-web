import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 150px;
  height: 106px;
  display: flex;
  justify-content: space-between;
  color: green;
  font-size: 36px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 80px;
  }
`;
export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      border: 1px solid var(--gray);
      border-radius: 10px;
      padding: 10px;
      span {
        font-size: 1.2rem;
        font-weight: 300;
      }
      &:hover {
        background-color: var(--gray);
        cursor: pointer;
      }
    }
  }
`;

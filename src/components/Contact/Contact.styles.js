import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--blue);
`;

export const Container = styled.div``;

export const Text = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-weight: 100;
    font-family: "Poppins", sans-serif;
    font-size: var(--fontSuperBig);
    color: var(--white);
    text-align: center;
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Con = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: var(--fontBig);
    color: var(--white);
    font-weight: 100;
    text-align: center;
    @media (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;

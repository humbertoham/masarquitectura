import styled from "styled-components";

export const LogoN = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const MenuLink = styled.a`
  margin: 18px;
  margin-top: 25px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--black);
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  &:hover {
    text-decoration: underline !important;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-top: var(--black) 1px solid;
  border-bottom: var(--black) 1px solid;
  margin-bottom: 15px;
`;

export const Logo = styled.a`
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: auto;
  @media (max-width: 1350px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "800px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
export const Hamburger = styled.div`
  display: none;
  margin: auto;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    border-radius: 50%;
    background: var(--blue);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1350px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

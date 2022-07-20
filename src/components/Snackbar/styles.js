import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  position: fixed;
  top: 100px;
  right: ${({ isOpen }) => (isOpen ? `20px` : `0`)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  border: 0;
  padding: 1rem 2.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 400;

  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  visibility: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};

  transition: all 200ms ease-in-out;

  > button {
    display: flex;
    align-items: center;

    font-size: 18px;
    cursor: pointer;
    transition: 200ms;
    padding: 0;
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  @media (max-width: 769px) {
    top: 10vh;
    width: 90%;
  }
`;

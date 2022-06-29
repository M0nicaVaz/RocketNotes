import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  width: min(60rem, 100vw);
  padding: 0 clamp(3rem, 3rem + 5vw, 10rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    font-size: clamp(3.4rem, 3rem + 1vw, 4.8rem);
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: clamp(1.8rem, 1.6rem + 0.5vw, 2.4rem);
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 6.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  opacity: 0.4;
`;

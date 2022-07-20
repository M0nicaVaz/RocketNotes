import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: 769px) {
    grid-template-columns: auto;
    grid-template-rows: 6.5rem 12rem auto 6.4rem 6.6rem;
    grid-template-areas:
      'header'
      'search'
      'content'
      'newnote'
      'brand';
  }
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > svg {
    display: none;
  }

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 769px) {
    gap: 2rem;
    padding: 0 8rem;

    > svg {
      display: block;
      cursor: pointer;
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      &:hover {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 4.4rem;
  text-align: center;
  overflow: auto;

  > li {
    margin-bottom: 2.4rem;

    > svg {
      display: none;
    }
  }

  @media (max-width: 769px) {
    width: ${({ isOpen }) => (isOpen ? `100%` : `0%`)};
    height: ${({ isOpen }) => (isOpen ? `35vh` : `0vh`)};
    bottom: ${({ isOpen }) => (isOpen ? `7.8rem` : `0px`)};

    opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
    visibility: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};

    transition: all 250ms ease-in-out;

    z-index: 9999;
    position: absolute;
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;

  @media (max-width: 769px) {
    padding: 6.4rem 3rem 0;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 6.4rem;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 769px) {
    padding: 0 3rem;
  }
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 769px) {
    font-size: 1.8rem;
  }
`;

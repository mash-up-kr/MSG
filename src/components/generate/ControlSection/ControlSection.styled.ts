import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ControlSection = styled.section`
  margin-top: 4.5vh;
`;

export const Categories = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.2rem;
  justify-content: center;
`;

export const OptionList = styled.ul`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  margin-top: 2.4rem;
`;

export const OptionItem = styled.li`
  ${({ theme }) => css`
    padding: 1.2rem;
    border: 0.22rem solid ${theme.color.gray700};
    border-radius: 1.3rem;
    cursor: pointer;
  `}
`;

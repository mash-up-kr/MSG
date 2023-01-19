import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { Status } from './Toast.component';

export const Toast = styled.div<{ status: Status }>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 50rem;
    height: 6.4rem;
    margin: 2rem 2rem 0 2rem;
    padding: 1.6rem;
    background: ${status === 'success' ? theme.color.purple10 : theme.color.red10};
    border: 0.1rem solid ${status === 'success' ? theme.color.purple40 : theme.color.red40};
    border-radius: 1.6rem;
    box-shadow: 0px 4px 20px rgba(33, 37, 41, 0.15);
    pointer-events: auto;
  `}
`;

export const Contents = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Badge = styled.div`
  line-height: 0;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.gray80};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
  `}
`;

export const CloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background: transparent;
  border: none;
`;

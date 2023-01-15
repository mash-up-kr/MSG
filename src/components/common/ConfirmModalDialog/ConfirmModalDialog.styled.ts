import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.dialog};
    width: 29rem;
    background: ${theme.color.gray700};
    border-radius: 2rem;
  `}
`;

export const DialogInner = styled.div`
  padding: 2.4rem 2.4rem 1.6rem;
  border-radius: 2rem 2rem 0 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.7rem;
    letter-spacing: -0.03em;
    white-space: pre-wrap;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    margin: 0.8rem auto 0;
    color: ${theme.color.gray300};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    letter-spacing: -0.04em;
    white-space: pre-wrap;
  `}
`;

export const DialogFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: 1.6rem 2.4rem;
    background: ${theme.color.gray700};
    border-radius: 0 0 2rem 2rem;
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    padding: 1.3rem 2rem;
    color: ${theme.color.white};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.08rem;
    white-space: nowrap;
    background: ${theme.color.gray500};
    border: 0;
    border-radius: 1.2rem;

    &:active {
      color: rgba(255, 255, 255, 0.5);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #495066;
      border-radius: 1.2rem;
    }
  `}
`;

export const ApprovalButton = styled.button`
  ${({ theme }) => css`
    position: relative;
    margin-left: 1.2rem;
    padding: 1.3rem 2rem;
    color: ${theme.color.white};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.05em;
    white-space: nowrap;
    background: ${theme.color.mashup};
    border: 0;
    border-radius: 1.2rem;

    &:active {
      color: rgba(255, 255, 255, 0.5);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        linear-gradient(98.54deg, #ff1c60 0%, #5243ff 100%);
      border-radius: 1.2rem;
    }
  `}
`;

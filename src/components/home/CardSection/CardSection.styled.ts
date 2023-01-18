import { BaseCard } from '@/components/common';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const CardSection = styled.section`
  margin: 5rem 0;
`;

const shakeCard = keyframes`
  from {
    transform: rotate(-6deg);
  }
  to {
    transform: rotate(6deg);
  }
`;

export const RotateBaseCard = styled(BaseCard)`
  animation: ${shakeCard} 2s infinite alternate ease-in-out;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 81.2rem;
  transform: translateY(-2rem);
`;

export const SphereContainer = styled.div`
  position: absolute;
  bottom: -30rem;
  z-index: -1;
  width: 60rem;
  height: 60rem;
`;

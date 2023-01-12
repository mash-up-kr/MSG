import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 81.2rem;

  &::after {
    position: fixed;
    bottom: 0;
    display: block;
    width: 100%;
    height: 28.6rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    content: '';
  }
`;

export const ContentsContainer = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: translateY(-2rem);
`;

export const SphereContainer = styled.div`
  position: absolute;
  bottom: -30rem;
  left: 50%;
  width: 60rem;
  height: 60rem;
  transform: translateX(-50%);
`;

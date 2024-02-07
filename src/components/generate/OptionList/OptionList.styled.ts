import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  gap: 1.4rem;
  justify-content: start;
  margin-top: 2.4rem;
  padding: 0 20px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

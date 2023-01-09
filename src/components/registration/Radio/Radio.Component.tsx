import type { PropsWithChildren } from 'react';

import * as Styled from './Radio.styled';

interface RadioProps {
  id: string;
  name: string;
  value: string;
}

const Radio = ({ id, name, value, children }: PropsWithChildren<RadioProps>) => {
  return (
    <>
      <Styled.Input type="radio" id={id} name={name} value={value} required />
      <Styled.Label htmlFor={id}>{children}</Styled.Label>
    </>
  );
};

export default Radio;

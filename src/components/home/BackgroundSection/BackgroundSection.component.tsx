import { LinearGradientSphere } from '@/components/common';
import * as Styled from './BackgroundSection.styled';

const BackgroundSection = () => {
  return (
    <section aria-hidden>
      <Styled.BackgroundTop />
      <Styled.SphereDeem>
        <Styled.SphereContainer>
          <LinearGradientSphere />
        </Styled.SphereContainer>
      </Styled.SphereDeem>
    </section>
  );
};

export default BackgroundSection;

import { LinearGradientSphere } from '@/components/common';
import fallingSnowLottie from '@/assets/lottie/falling-snow.json';
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

      <Styled.SnowLottie animationData={fallingSnowLottie} />
    </section>
  );
};

export default BackgroundSection;

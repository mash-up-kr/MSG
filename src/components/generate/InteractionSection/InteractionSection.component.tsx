import { LinearGradientSphere } from '@/components/common';
import * as Styled from './InteractionSection.styled';

const InteractionSection = () => {
  return (
    <Styled.InteractionSection>
      <Styled.ContentsContainer>
        <Styled.Title>두근두근!{'\n'}과연 내 카드의 모습은!?</Styled.Title>
        <Styled.Scene>
          <Styled.ZoomInOutContainer>
            <Styled.InteractiveBaseCard />
          </Styled.ZoomInOutContainer>
        </Styled.Scene>
      </Styled.ContentsContainer>
      <Styled.SphereContainer>
        <LinearGradientSphere />
      </Styled.SphereContainer>
      <Styled.BlackBackground>
        <Styled.AnimationEndMessage>앗{'\n'}내 카드의 상태가..!?</Styled.AnimationEndMessage>
      </Styled.BlackBackground>
    </Styled.InteractionSection>
  );
};

export default InteractionSection;

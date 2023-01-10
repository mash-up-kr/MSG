import * as Styled from './BaseCard.styled';

const BaseCard = () => {
  return (
    <Styled.Container>
      <Styled.Twinkles>
        <Styled.Twinkle inverted="true" />
        <Styled.Twinkle />
      </Styled.Twinkles>
      <Styled.Background>
        <Styled.HiddenMashong />
      </Styled.Background>
      <Styled.Introduction>Who’s next?</Styled.Introduction>
      <Styled.Twinkles>
        <Styled.Twinkle inverted="true" />
        <Styled.Twinkle />
      </Styled.Twinkles>
    </Styled.Container>
  );
};

export default BaseCard;

import * as Styled from './BaseCard.styled';

interface BaseCardProps {
  className?: string;
}

const BaseCard = ({ className }: BaseCardProps) => {
  return (
    <Styled.Container className={className}>
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

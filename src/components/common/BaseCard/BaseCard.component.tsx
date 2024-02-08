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
        <Styled.HiddenMashongDeco />
        <Styled.HiddenMashong />
        <Styled.Moon />
      </Styled.Background>
      <Styled.WhosNext />
      <Styled.Twinkles>
        <Styled.Twinkle inverted="true" />
        <Styled.Twinkle />
      </Styled.Twinkles>
    </Styled.Container>
  );
};

export default BaseCard;

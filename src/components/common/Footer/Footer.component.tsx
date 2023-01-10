import MashupLogo from '@/assets/svg/mashup-logo.svg';
import * as Styled from './Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <MashupLogo aria-label="Mash Up" />
      <Styled.IconContainer>
        <a href="https://www.instagram.com/official_mashup_/" target="_blank" rel="noreferrer">
          <Styled.InstagramDark />
        </a>
        <a href="https://github.com/mash-up-kr" target="_blank" rel="noreferrer">
          <Styled.GithubDark />
        </a>
        <a href="mailto:recruit.mashup@gmail.com" target="_blank" rel="noreferrer">
          <Styled.MailDark />
        </a>
      </Styled.IconContainer>
    </Styled.Footer>
  );
};

export default Footer;

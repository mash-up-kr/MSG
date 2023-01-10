import styled from '@emotion/styled';
import GithubDarkSvg from '@/assets/svg/github-dark.svg';
import MailDarkSvg from '@/assets/svg/mail-dark.svg';
import InstagramDarkSvg from '@/assets/svg/instagram-dark.svg';

export const Footer = styled.footer`
  padding: 1rem 0 3rem;
  text-align: center;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2.1rem;
  column-gap: 1.6rem;
`;

export const GithubDark = styled(GithubDarkSvg)``;
export const MailDark = styled(MailDarkSvg)``;
export const InstagramDark = styled(InstagramDarkSvg)``;

import mashUpCareer from '@/assets/image/mash-up-career-2x-min.png';
import * as Styled from './RecruitSection.styled';

const RecruitSection = () => {
  return (
    <Styled.RecruitAnchor href="https://recruit.mash-up.kr" target="_blank" rel="noreferrer">
      <Styled.RecruitSection>
        <Styled.RecruitSchedule dateTime="2024-01-29">01.29</Styled.RecruitSchedule> ~{' '}
        <Styled.RecruitSchedule dateTime="2024-02-14">02.14</Styled.RecruitSchedule>
        <Styled.Paragraph>Mash-Up은 지금{'\n'}14기 Rookies 모집 중!</Styled.Paragraph>
        <Styled.Mashong src={mashUpCareer.src} alt="" width={120} height={102} />
      </Styled.RecruitSection>
    </Styled.RecruitAnchor>
  );
};

export default RecruitSection;

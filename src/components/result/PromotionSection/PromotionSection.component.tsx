import { Footer } from '@/components/common';
import { EventSection, RecruitSection } from '@/components/result';
import * as Styled from './PromotionSection.styled';

const PromotionSection = () => {
  return (
    <Styled.PromotionSection>
      <EventSection />
      <RecruitSection />
      <Footer />
    </Styled.PromotionSection>
  );
};

export default PromotionSection;

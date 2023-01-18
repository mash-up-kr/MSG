import { Button } from '@/components/common';
import { REGISTRATION_ROUTES } from '@/constants/route';
import { useRouter } from 'next/router';
import * as Styled from './GoToRegistrationSection.styled';

const GoToRegistrationButton = () => {
  const router = useRouter();

  const handleMoveToNamePage = () => {
    router.push(REGISTRATION_ROUTES.name);
  };

  return (
    <Styled.GoToRegistrationSection>
      <Button size="l" onClick={handleMoveToNamePage}>
        매숑이 카드 만들기
      </Button>
    </Styled.GoToRegistrationSection>
  );
};

export default GoToRegistrationButton;

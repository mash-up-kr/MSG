import { Button } from '@/components/common';
import { REGISTRATION_ROUTES } from '@/constants/route';
import { useRouter } from 'next/router';
import * as Styled from './GoToRegistrationButton.styled';

const GoToRegistrationButton = () => {
  const router = useRouter();

  const handleClickButton = () => {
    router.push(REGISTRATION_ROUTES.name);
  };

  return (
    <Styled.Container>
      <Button size="l" onClick={handleClickButton}>
        매숑이 카드 만들기
      </Button>
    </Styled.Container>
  );
};

export default GoToRegistrationButton;

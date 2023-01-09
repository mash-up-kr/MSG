import type { NextPage } from 'next';
import { NavigationBar } from '@/components/common';
import { NameForm, RegistrationLayout } from '@/components/registration';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/route';

const NamePage: NextPage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(true);

  const handleChangeNameForm = (validity: boolean) => {
    setIsRightButtonDisabled(!validity);
  };

  const handleClickRightButton = () => {
    if (!formRef.current) return;
    formRef.current.requestSubmit();
  };

  const handleClickBackButton = () => {
    router.replace(ROUTES.home);
  };

  return (
    <>
      <header>
        <NavigationBar
          rightButtonText="다음"
          rightButtonEvent={handleClickRightButton}
          backButtonEvent={handleClickBackButton}
          isDisabled={isRightButtonDisabled}
        />
      </header>
      <RegistrationLayout>
        <NameForm ref={formRef} onChangeForm={handleChangeNameForm} />
      </RegistrationLayout>
    </>
  );
};

export default NamePage;

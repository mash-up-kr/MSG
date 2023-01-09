import type { NextPage } from 'next';
import { NavigationBar } from '@/components/common';
import { NameForm, RegistrationLayout } from '@/components/registration';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/route';

const NamePage: NextPage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFormChange = (validity: boolean) => {
    setIsDisabled(!validity);
  };

  const handleRightButtonClick = () => {
    if (!formRef.current) return;
    formRef.current.requestSubmit();
  };

  const handleBackButtonClick = () => {
    router.replace(ROUTES.home);
  };

  return (
    <>
      <header>
        <NavigationBar
          rightButtonText="다음"
          rightButtonEvent={handleRightButtonClick}
          backButtonEvent={handleBackButtonClick}
          isDisabled={isDisabled}
        />
      </header>
      <RegistrationLayout>
        <NameForm ref={formRef} onFormChange={handleFormChange} />
      </RegistrationLayout>
    </>
  );
};

export default NamePage;

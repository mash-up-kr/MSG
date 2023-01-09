import type { NextPage } from 'next';
import { NavigationBar } from '@/components/common';
import { PlatformForm, RegistrationLayout } from '@/components/registration';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { REGISTRATION_ROUTES } from '@/constants/route';

const PlatformPage: NextPage = () => {
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
    const { name } = router.query;
    router.replace({ pathname: REGISTRATION_ROUTES.name, query: { name } });
  };

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.query.name) {
      router.replace(REGISTRATION_ROUTES.name);
    }
  }, [router]);

  useEffect(() => {
    if (!formRef.current) return;
    const validity = formRef.current.checkValidity();
    handleFormChange(validity);
  }, []);

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
        <PlatformForm ref={formRef} onFormChange={handleFormChange} />
      </RegistrationLayout>
    </>
  );
};

export default PlatformPage;
